<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
    import TransactionInfoJS from "../TransactionInfoJS.svelte";
</script>

<p>
    <a href="/jsvm/modules/_app.html" target="_blank">
        <code>$app</code>
    </a>
    is the main interface to interact with your database.
</p>
<p>
    <code>$app.db()</code>
    returns a <code>dbx.Builder</code> that could run all kind of SQL statements, including raw queries.
</p>
<div class="alert alert-info">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            For more details and examples how to interact with Record and Collection models programmatically
            you could also check <a href="/docs/js-collections">Collection operations</a>
            and
            <a href="/docs/js-records">Record operations</a> sections.
        </p>
    </div>
</div>

<Toc />

<HeadingLink title="Executing queries" />
<p>
    To execute DB queries you can start with the <code>newQuery("...")</code> statement and then call one of:
</p>
<ul>
    <li>
        <p>
            <HeadingLink title="execute()" tag="code" />
            - for any query statement that is not meant to retrieve data:
        </p>
        <CodeBlock
            language="javascript"
            content={`
                $app.db()
                    .newQuery("DELETE FROM articles WHERE status = 'archived'")
                    .execute() // throw an error on db failure
            `}
        />
    </li>
    <li>
        <p>
            <HeadingLink id="execute-one" title="one()" tag="code" />
            - to populate a single row into <code>DynamicModel</code> object:
        </p>
        <CodeBlock
            language="javascript"
            content={`
                const result = new DynamicModel({
                    // describe the shape of the data (used also as initial values)
                    // the keys cannot start with underscore and must be a valid Go struct field name
                    "id":     "",
                    "status": false,
                    "age":    0, // use -0 for a float value
                    "roles":  [], // serialized json db arrays are decoded as plain arrays
                })

                $app.db()
                    .newQuery("SELECT id, status, age, roles FROM users WHERE id=1")
                    .one(result) // throw an error on db failure or missing row

                console.log(result.id)
            `}
        />
    </li>
    <li>
        <p>
            <HeadingLink id="execute-all" title="all()" tag="code" />
            - to populate multiple rows into an array of objects (note that the array must be created with
            <code>arrayOf</code>):
        </p>
        <CodeBlock
            language="javascript"
            content={`
                const result = arrayOf(new DynamicModel({
                    // describe the shape of the data (used also as initial values)
                    // the keys cannot start with underscore and must be a valid Go struct field name
                    "id":     "",
                    "status": false,
                    "age":    0, // use -0 for a float value
                    "roles":  [], // serialized json db arrays are decoded as plain arrays
                }))

                $app.db()
                    .newQuery("SELECT id, status, age, roles FROM users LIMIT 100")
                    .all(result) // throw an error on db failure

                if (result.length > 0) {
                    console.log(result[0].id)
                }
            `}
        />
    </li>
</ul>

<HeadingLink title="Binding parameters" />
<p>
    To prevent SQL injection attacks, you should use named parameters for any expression value that comes from
    user input. This could be done using the named <code>{`{:paramName}`}</code>
    placeholders in your SQL statement and then define the parameter values for the query with
    <code>bind(params)</code>. For example:
</p>
<CodeBlock
    language="javascript"
    content={`
        const result = arrayOf(new DynamicModel({
            "name":    "",
            "created": "",
        }))

        $app.db()
            .newQuery("SELECT name, created FROM posts WHERE created >= {:from} and created <= {:to}")
            .bind({
                "from": "2023-06-25 00:00:00.000Z",
                "to":   "2023-06-28 23:59:59.999Z",
            })
            .all(result)

        console.log(result.length)
    `}
/>

<HeadingLink title="Query builder" />
<p>
    Instead of writing plain SQLs, you can also compose SQL statements programmatically using the db query
    builder.
    <br />
    Every SQL keyword has a corresponding query building method. For example, <code>SELECT</code> corresponds
    to <code>select()</code>, <code>FROM</code> corresponds to <code>from()</code>,
    <code>WHERE</code> corresponds to <code>where()</code>, and so on.
</p>
<CodeBlock
    language="javascript"
    content={`
        const result = arrayOf(new DynamicModel({
            "id":    "",
            "email": "",
        }))

        $app.db()
            .select("id", "email")
            .from("users")
            .andWhere($dbx.like("email", "example.com"))
            .limit(100)
            .orderBy("created ASC")
            .all(result)
    `}
/>

<HeadingLink title="select(), andSelect(), distinct()" tag="h5" />
<p>
    The <code>select(...cols)</code> method initializes a <code>SELECT</code> query builder. It accepts a list
    of the column names to be selected.
    <br />
    To add additional columns to an existing select query, you can call <code>andSelect()</code>.
    <br />
    To select distinct rows, you can call <code>distinct(true)</code>.
</p>
<CodeBlock
    language="javascript"
    content={`
        $app.db()
            .select("id", "avatar as image")
            .andSelect("(firstName || ' ' || lastName) as fullName")
            .distinct(true)
            ...
    `}
/>

<HeadingLink title="from()" tag="h5" />
<p>
    The <code>from(...tables)</code> method specifies which tables to select from (plain table names are automatically
    quoted).
</p>
<CodeBlock
    language="javascript"
    content={`
        $app.db()
            .select("table1.id", "table2.name")
            .from("table1", "table2")
            ...
    `}
/>

<HeadingLink title="join()" tag="h5" />
<p>
    The <code>join(type, table, on)</code> method specifies a <code>JOIN</code> clause. It takes 3 parameters:
</p>
<ul>
    <li><code>type</code> - join type string like <code>INNER JOIN</code>, <code>LEFT JOIN</code>, etc.</li>
    <li><code>table</code> - the name of the table to be joined</li>
    <li><code>on</code> - optional <code>dbx.Expression</code> as an <code>ON</code> clause</li>
</ul>
<p>
    For convenience, you can also use the shortcuts <code>innerJoin(table, on)</code>,
    <code>leftJoin(table, on)</code>,
    <code>rightJoin(table, on)</code> to specify <code>INNER JOIN</code>, <code>LEFT JOIN</code> and
    <code>RIGHT JOIN</code>, respectively.
</p>
<CodeBlock
    language="javascript"
    content={`
        $app.db()
            .select("users.*")
            .from("users")
            .innerJoin("profiles", $dbx.exp("profiles.user_id = users.id"))
            .join("FULL OUTER JOIN", "department", $dbx.exp("department.id = {:id}", {id: "someId"}))
            ...
    `}
/>

<HeadingLink title="where(), andWhere(), orWhere()" tag="h5" />
<p>
    The <code>where(exp)</code> method specifies the <code>WHERE</code> condition of the query.
    <br />
    You can also use <code>andWhere(exp)</code> or <code>orWhere(exp)</code> to append additional one or more
    conditions to an existing <code>WHERE</code> clause.
    <br />
    Each where condition accepts a single <code>dbx.Expression</code> (see below for full list).
</p>
<CodeBlock
    language="javascript"
    content={`
        /*
        SELECT users.*
        FROM users
        WHERE id = "someId" AND
            status = "public" AND
            name like "%john%" OR
            (
                role = "manager" AND
                fullTime IS TRUE AND
                experience > 10
            )
        */
        $app.db()
            .select("users.*")
            .from("users")
            .where($dbx.exp("id = {:id}", { id: "someId" }))
            .andWhere($dbx.hashExp({ status: "public" }))
            .andWhere($dbx.like("name", "john"))
            .orWhere($dbx.and(
                $dbx.hashExp({
                    role:     "manager",
                    fullTime: true,
                }),
                $dbx.exp("experience > {:exp}", { exp: 10 })
            ))
            ...
    `}
/>

<p>
    The following <code>dbx.Expression</code> methods are available:
</p>
<ul>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.exp(raw, optParams)" tag="code" />
        <br />
        Generates an expression with the specified raw query fragment. Use the <code>optParams</code> to bind
        parameters to the expression.
        <CodeBlock
            language="javascript"
            content={`
                $dbx.exp("status = 'public'")
                $dbx.exp("total > {:min} AND total < {:max}", { min: 10, max: 30 })
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.hashExp(pairs)" tag="code" />
        <br />
        Generates a hash expression from a map whose keys are DB column names which need to be filtered according
        to the corresponding values.
        <CodeBlock
            language="javascript"
            content={`
                // slug = "example" AND active IS TRUE AND tags in ("tag1", "tag2", "tag3") AND parent IS NULL
                $dbx.hashExp({
                    slug:   "example",
                    active: true,
                    tags:   ["tag1", "tag2", "tag3"],
                    parent: null,
                })
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.not(exp)" tag="code" />
        <br />
        Negates a single expression by wrapping it with <code>NOT()</code>.
        <CodeBlock
            language="javascript"
            content={`
                // NOT(status = 1)
                $dbx.not($dbx.exp("status = 1"))
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.and(...exps)" tag="code" />
        <br />
        Creates a new expression by concatenating the specified ones with <code>AND</code>.
        <CodeBlock
            language="javascript"
            content={`
                // (status = 1 AND username like "%john%")
                $dbx.and($dbx.exp("status = 1"), $dbx.like("username", "john"))
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.or(...exps)" tag="code" />
        <br />
        Creates a new expression by concatenating the specified ones with <code>OR</code>.
        <CodeBlock
            language="javascript"
            content={`
                // (status = 1 OR username like "%john%")
                $dbx.or($dbx.exp("status = 1"), $dbx.like("username", "john"))
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.in(col, ...values)" tag="code" />
        <br />
        Generates an <code>IN</code> expression for the specified column and the list of allowed values.
        <CodeBlock
            language="javascript"
            content={`
                // status IN ("public", "reviewed")
                $dbx.in("status", "public", "reviewed")
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.notIn(col, ...values)" tag="code" />
        <br />
        Generates an <code>NOT IN</code> expression for the specified column and the list of allowed values.
        <CodeBlock
            language="javascript"
            content={`
                // status NOT IN ("public", "reviewed")
                $dbx.notIn("status", "public", "reviewed")
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.like(col, ...values)" tag="code" />
        <br />
        Generates a <code>LIKE</code> expression for the specified column and the possible strings that the
        column should be like. If multiple values are present, the column should be like
        <strong>all</strong> of them.
        <br />
        By default, each value will be surrounded by <em>"%"</em> to enable partial matching. Special
        characters like <em>"%"</em>, <em>"\"</em>, <em>"_"</em> will also be properly escaped. You may call
        <code>escape(...pairs)</code> and/or <code>match(left, right)</code> to change the default behavior.
        <CodeBlock
            language="javascript"
            content={`
                // name LIKE "%test1%" AND name LIKE "%test2%"
                $dbx.like("name", "test1", "test2")

                // name LIKE "test1%"
                $dbx.like("name", "test1").match(false, true)
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.notLike(col, ...values)" tag="code" />
        <br />
        Generates a <code>NOT LIKE</code> expression in similar manner as <code>like()</code>.
        <CodeBlock
            language="javascript"
            content={`
                // name NOT LIKE "%test1%" AND name NOT LIKE "%test2%"
                $dbx.notLike("name", "test1", "test2")

                // name NOT LIKE "test1%"
                $dbx.notLike("name", "test1").match(false, true)
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.orLike(col, ...values)" tag="code" />
        <br />
        This is similar to <code>like()</code> except that the column must be one of the provided values, aka.
        multiple values are concatenated with <code>OR</code> instead of <code>AND</code>.
        <CodeBlock
            language="javascript"
            content={`
                // name LIKE "%test1%" OR name LIKE "%test2%"
                $dbx.orLike("name", "test1", "test2")

                // name LIKE "test1%" OR name LIKE "test2%"
                $dbx.orLike("name", "test1", "test2").match(false, true)
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.orNotLike(col, ...values)" tag="code" />
        <br />
        This is similar to <code>notLike()</code> except that the column must not be one of the provided
        values, aka. multiple values are concatenated with <code>OR</code> instead of <code>AND</code>.
        <CodeBlock
            language="javascript"
            content={`
                // name NOT LIKE "%test1%" OR name NOT LIKE "%test2%"
                $dbx.orNotLike("name", "test1", "test2")

                // name NOT LIKE "test1%" OR name NOT LIKE "test2%"
                $dbx.orNotLike("name", "test1", "test2").match(false, true)
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.exists(exp)" tag="code" />
        <br />
        Prefix with <code>EXISTS</code> the specified expression (usually a subquery).
        <CodeBlock
            language="javascript"
            content={`
                // EXISTS (SELECT 1 FROM users WHERE status = 'active')
                $dbx.exists(dbx.exp("SELECT 1 FROM users WHERE status = 'active'"))
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.notExists(exp)" tag="code" />
        <br />
        Prefix with <code>NOT EXISTS</code> the specified expression (usually a subquery).
        <CodeBlock
            language="javascript"
            content={`
                // NOT EXISTS (SELECT 1 FROM users WHERE status = 'active')
                $dbx.notExists(dbx.exp("SELECT 1 FROM users WHERE status = 'active'"))
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.between(col, from, to)" tag="code" />
        <br />
        Generates a <code>BETWEEN</code> expression with the specified range.
        <CodeBlock
            language="javascript"
            content={`
                // age BETWEEN 3 and 99
                $dbx.between("age", 3, 99)
            `}
        />
    </li>
    <li class="m-b-xs">
        <HeadingLink title="$dbx.notBetween(col, from, to)" tag="code" />
        <br />
        Generates a <code>NOT BETWEEN</code> expression with the specified range.
        <CodeBlock
            language="javascript"
            content={`
                // age NOT BETWEEN 3 and 99
                $dbx.notBetween("age", 3, 99)
            `}
        />
    </li>
</ul>

<HeadingLink title="orderBy(), andOrderBy()" tag="h5" />
<p>
    The <code>orderBy(...cols)</code> specifies the <code>ORDER BY</code> clause of the query.
    <br />
    A column name can contain <em>"ASC"</em> or <em>"DESC"</em> to indicate its ordering direction.
    <br />
    You can also use <code>andOrderBy(...cols)</code> to append additional columns to an existing
    <code>ORDER BY</code> clause.
</p>
<CodeBlock
    language="javascript"
    content={`
        $app.db()
            .select("users.*")
            .from("users")
            .orderBy("created ASC", "updated DESC")
            .andOrderBy("title ASC")
            ...
    `}
/>

<HeadingLink title="groupBy(), andGroupBy()" tag="h5" />
<p>
    The <code>groupBy(...cols)</code> specifies the <code>GROUP BY</code> clause of the query.
    <br />
    You can also use <code>andGroupBy(...cols)</code> to append additional columns to an existing
    <code>GROUP BY</code> clause.
</p>
<CodeBlock
    language="javascript"
    content={`
        $app.db()
            .select("users.*")
            .from("users")
            .groupBy("department", "level")
            ...
    `}
/>

<HeadingLink title="having(), andHaving(), orHaving()" tag="h5" />
<p>
    The <code>having(exp)</code> specifies the <code>HAVING</code> clause of the query.
    <br />
    Similarly to
    <code>where(exp)</code>, it accept a single <code>dbx.Expression</code> (see all available expressions
    listed above).
    <br />
    You can also use <code>andHaving(exp)</code> or <code>orHaving(exp)</code> to append additional one or
    more conditions to an existing <code>HAVING</code> clause.
</p>
<CodeBlock
    language="javascript"
    content={`
        $app.db()
            .select("users.*")
            .from("users")
            .groupBy("department", "level")
            .having($dbx.exp("sum(level) > {:sum}", { sum: 10 }))
            ...
    `}
/>

<HeadingLink title="limit()" tag="h5" />
<p>
    The <code>limit(number)</code> method specifies the <code>LIMIT</code> clause of the query.
</p>
<CodeBlock
    language="javascript"
    content={`
        $app.db()
            .select("users.*")
            .from("users")
            .limit(30)
            ...
    `}
/>

<HeadingLink title="offset()" tag="h5" />
<p>
    The <code>offset(number)</code> method specifies the <code>OFFSET</code> clause of the query. Usually used
    together with <code>limit(number)</code>.
</p>
<CodeBlock
    language="javascript"
    content={`
        $app.db()
            .select("users.*")
            .from("users")
            .offset(5)
            .limit(30)
            ...
    `}
/>

<HeadingLink title="Transaction" />
<TransactionInfoJS />
<CodeBlock
    language="javascript"
    content={`
        $app.runInTransaction((txApp) => {
            // update a record
            const record = txApp.findRecordById("articles", "RECORD_ID")
            record.set("status", "active")
            txApp.save(record)

            // run a custom raw query (doesn't fire event hooks)
            txApp.db().newQuery("DELETE FROM articles WHERE status = 'pending'").execute()
        })
    `}
/>
