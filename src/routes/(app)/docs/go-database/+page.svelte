<script>
    import HeadingLink from "@/components/HeadingLink.svelte";
    import CodeBlock from "@/components/CodeBlock.svelte";
    import Toc from "@/components/Toc.svelte";
    import TransactionInfoGo from "../TransactionInfoGo.svelte";
</script>

<p>
    <a href="{import.meta.env.PB_GODOC_URL}/core#App" target="_blank" rel="noopener noreferrer">
        <code>core.App</code>
    </a>
    is the main interface to interact with the database.
</p>
<p>
    <code>App.DB()</code> returns a <code>dbx.Builder</code> that could run all kind of SQL statements, including
    raw queries.
</p>
<p>
    Most of the common DB operations are listed below, but you can find further information in the
    <a href="https://pkg.go.dev/github.com/pocketbase/dbx" target="_blank" rel="noopener noreferrer">
        dbx package godoc
    </a>.
</p>
<div class="alert alert-info">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            For more details and examples how to interact with Record and Collection models programmatically
            you could also check <a href="/docs/go-collections">Collection operations</a>
            and
            <a href="/docs/go-records">Record operations</a> sections.
        </p>
    </div>
</div>

<Toc />

<HeadingLink title="Executing queries" />
<p>
    To execute DB queries you can start with the <code>NewQuery("...")</code> statement and then call one of:
</p>
<ul>
    <li>
        <p>
            <HeadingLink title="Execute()" tag="code" />
            - for any query statement that is not meant to retrieve data:
        </p>
        <CodeBlock
            language="go"
            content={`
                res, err := app.DB().
                    NewQuery("DELETE FROM articles WHERE status = 'archived'").
                    Execute()
            `}
        />
    </li>
    <li>
        <p>
            <HeadingLink id="execute-one" title="One()" tag="code" />
            - to populate a single row into a struct:
        </p>
        <!-- prettier-ignore -->
        <CodeBlock
            language="go"
            content={`
                type User struct {
                    Id     string                  ` + "`" + `db:"id" json:"id"` + "`" + `
                    Status bool                    ` + "`" + `db:"status" json:"status"` + "`" + `
                    Age    int                     ` + "`" + `db:"age" json:"age"` + "`" + `
                    Roles  types.JSONArray[string] ` + "`" + `db:"roles" json:"roles"` + "`" + `
                }

                user := User{}

                err := app.DB().
                    NewQuery("SELECT id, status, age, roles FROM users WHERE id=1").
                    One(&user)
            `}
        />
    </li>
    <li>
        <p>
            <HeadingLink id="execute-all" title="All()" tag="code" />
            - to populate multiple rows into a slice of structs:
        </p>
        <!-- prettier-ignore -->
        <CodeBlock
            language="go"
            content={`
                type User struct {
                    Id     string                  ` + "`" + `db:"id" json:"id"` + "`" + `
                    Status bool                    ` + "`" + `db:"status" json:"status"` + "`" + `
                    Age    int                     ` + "`" + `db:"age" json:"age"` + "`" + `
                    Roles  types.JSONArray[string] ` + "`" + `db:"roles" json:"roles"` + "`" + `
                }

                users := []User{}

                err := app.DB().
                    NewQuery("SELECT id, status, age, roles FROM users LIMIT 100").
                    All(&users)
            `}
        />
    </li>
</ul>

<HeadingLink title="Binding parameters" />
<p>
    To prevent SQL injection attacks, you should use named parameters for any expression value that comes from
    user input. This could be done using the named <code>{`{:paramName}`}</code>
    placeholders in your SQL statement and then define the parameter values for the query with
    <code>Bind(params)</code>. For example:
</p>
<!-- prettier-ignore -->
<CodeBlock
    language="go"
    content={`
        type Post struct {
            Name     string         ` + "`" + `db:"name" json:"name"` + "`" + `
            Created  types.DateTime ` + "`" + `db:"created" json:"created"` + "`" + `
        }

        posts := []Post{}

        err := app.DB().
            NewQuery("SELECT name, created FROM posts WHERE created >= {:from} and created <= {:to}").
            Bind(dbx.Params{
                "from": "2023-06-25 00:00:00.000Z",
                "to":   "2023-06-28 23:59:59.999Z",
            }).
            All(&posts)
    `}
/>

<HeadingLink title="Query builder" />
<p>
    Instead of writing plain SQLs, you can also compose SQL statements programmatically using the db query
    builder.
    <br />
    Every SQL keyword has a corresponding query building method. For example, <code>SELECT</code> corresponds
    to <code>Select()</code>, <code>FROM</code> corresponds to <code>From()</code>,
    <code>WHERE</code> corresponds to <code>Where()</code>, and so on.
</p>
<!-- prettier-ignore -->
<CodeBlock
    language="go"
    content={`
        users := []struct {
            Id    string ` + "`" + `db:"id" json:"id"` + "`" + `
            Email string ` + "`" + `db:"email" json:"email"` + "`" + `
        }{}

        app.DB().
            Select("id", "email").
            From("users").
            AndWhere(dbx.Like("email", "example.com")).
            Limit(100).
            OrderBy("created ASC").
            All(&users)
    `}
/>

<HeadingLink title="Select(), AndSelect(), Distinct()" tag="h5" />
<p>
    The <code>Select(...cols)</code> method initializes a <code>SELECT</code> query builder. It accepts a list
    of the column names to be selected.
    <br />
    To add additional columns to an existing select query, you can call <code>AndSelect()</code>.
    <br />
    To select distinct rows, you can call <code>Distinct(true)</code>.
</p>
<CodeBlock
    language="go"
    content={`
        app.DB().
            Select("id", "avatar as image").
            AndSelect("(firstName || ' ' || lastName) as fullName").
            Distinct(true)
            ...
    `}
/>

<HeadingLink title="From()" tag="h5" />
<p>
    The <code>From(...tables)</code> method specifies which tables to select from (plain table names are automatically
    quoted).
</p>
<CodeBlock
    language="go"
    content={`
        app.DB().
            Select("table1.id", "table2.name").
            From("table1", "table2")
            ...
    `}
/>

<HeadingLink title="Join()" tag="h5" />
<p>
    The <code>Join(type, table, on)</code> method specifies a <code>JOIN</code> clause. It takes 3 parameters:
</p>
<ul>
    <li><code>type</code> - join type string like <code>INNER JOIN</code>, <code>LEFT JOIN</code>, etc.</li>
    <li><code>table</code> - the name of the table to be joined</li>
    <li><code>on</code> - optional <code>dbx.Expression</code> as an <code>ON</code> clause</li>
</ul>
<p>
    For convenience, you can also use the shortcuts <code>InnerJoin(table, on)</code>,
    <code>LeftJoin(table, on)</code>,
    <code>RightJoin(table, on)</code> to specify <code>INNER JOIN</code>, <code>LEFT JOIN</code> and
    <code>RIGHT JOIN</code>, respectively.
</p>
<CodeBlock
    language="go"
    content={`
        app.DB().
            Select("users.*").
            From("users").
            InnerJoin("profiles", dbx.NewExp("profiles.user_id = users.id")).
            Join("FULL OUTER JOIN", "department", dbx.NewExp("department.id = {:id}", dbx.Params{ "id": "someId" }))
            ...
    `}
/>

<HeadingLink title="Where(), AndWhere(), OrWhere()" tag="h5" />
<p>
    The <code>Where(exp)</code> method specifies the <code>WHERE</code> condition of the query.
    <br />
    You can also use <code>AndWhere(exp)</code> or <code>OrWhere(exp)</code> to append additional one or more
    conditions to an existing <code>WHERE</code> clause.
    <br />
    Each where condition accepts a single <code>dbx.Expression</code> (see below for full list).
</p>
<CodeBlock
    language="go"
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
        app.DB().
            Select("users.*").
            From("users").
            Where(dbx.NewExp("id = {:id}", dbx.Params{ "id": "someId" })).
            AndWhere(dbx.HashExp{"status": "public"}).
            AndWhere(dbx.Like("name", "john")).
            OrWhere(dbx.And(
                dbx.HashExp{
                    "role":     "manager",
                    "fullTime": true,
                },
                dbx.NewExp("experience > {:exp}", dbx.Params{ "exp": 10 })
            ))
            ...
    `}
/>

<p>
    The following <code>dbx.Expression</code> methods are available:
</p>
<ul>
    <li>
        <HeadingLink title="dbx.NewExp(raw, optParams)" tag="code" />
        <br />
        Generates an expression with the specified raw query fragment. Use the <code>optParams</code> to bind
        <code>dbx.Params</code> to the expression.
        <CodeBlock
            language="go"
            content={`
                dbx.NewExp("status = 'public'")
                dbx.NewExp("total > {:min} AND total < {:max}", dbx.Params{ "min": 10, "max": 30 })
            `}
        />
    </li>
    <li>
        <HeadingLink title={`dbx.HashExp{k:v}`} tag="code" />
        <br />
        Generates a hash expression from a map whose keys are DB column names which need to be filtered according
        to the corresponding values.
        <CodeBlock
            language="go"
            content={`
                // slug = "example" AND active IS TRUE AND tags in ("tag1", "tag2", "tag3") AND parent IS NULL
                dbx.HashExp{
                    "slug":   "example",
                    "active": true,
                    "tags":   []any{"tag1", "tag2", "tag3"},
                    "parent": nil,
                }
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.Not(exp)" tag="code" />
        <br />
        Negates a single expression by wrapping it with <code>NOT()</code>.
        <CodeBlock
            language="go"
            content={`
                // NOT(status = 1)
                dbx.Not(dbx.NewExp("status = 1"))
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.And(...exps)" tag="code" />
        <br />
        Creates a new expression by concatenating the specified ones with <code>AND</code>.
        <CodeBlock
            language="go"
            content={`
                // (status = 1 AND username like "%john%")
                dbx.And(
                    dbx.NewExp("status = 1"),
                    dbx.Like("username", "john"),
                )
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.Or(...exps)" tag="code" />
        <br />
        Creates a new expression by concatenating the specified ones with <code>OR</code>.
        <CodeBlock
            language="go"
            content={`
                // (status = 1 OR username like "%john%")
                dbx.Or(
                    dbx.NewExp("status = 1"),
                    dbx.Like("username", "john")
                )
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.In(col, ...values)" tag="code" />
        <br />
        Generates an <code>IN</code> expression for the specified column and the list of allowed values.
        <CodeBlock
            language="go"
            content={`
                // status IN ("public", "reviewed")
                dbx.In("status", "public", "reviewed")
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.NotIn(col, ...values)" tag="code" />
        <br />
        Generates an <code>NOT IN</code> expression for the specified column and the list of allowed values.
        <CodeBlock
            language="go"
            content={`
                // status NOT IN ("public", "reviewed")
                dbx.NotIn("status", "public", "reviewed")
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.Like(col, ...values)" tag="code" />
        <br />
        Generates a <code>LIKE</code> expression for the specified column and the possible strings that the
        column should be like. If multiple values are present, the column should be like
        <strong>all</strong> of them.
        <br />
        By default, each value will be surrounded by <em>"%"</em> to enable partial matching. Special
        characters like <em>"%"</em>, <em>"\"</em>, <em>"_"</em> will also be properly escaped. You may call
        <code>Escape(...pairs)</code> and/or <code>Match(left, right)</code> to change the default behavior.
        <CodeBlock
            language="go"
            content={`
                // name LIKE "%test1%" AND name LIKE "%test2%"
                dbx.Like("name", "test1", "test2")

                // name LIKE "test1%"
                dbx.Like("name", "test1").Match(false, true)
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.NotLike(col, ...values)" tag="code" />
        <br />
        Generates a <code>NOT LIKE</code> expression in similar manner as <code>Like()</code>.
        <CodeBlock
            language="go"
            content={`
                // name NOT LIKE "%test1%" AND name NOT LIKE "%test2%"
                dbx.NotLike("name", "test1", "test2")

                // name NOT LIKE "test1%"
                dbx.NotLike("name", "test1").Match(false, true)
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.OrLike(col, ...values)" tag="code" />
        <br />
        This is similar to <code>Like()</code> except that the column must be one of the provided values, aka.
        multiple values are concatenated with <code>OR</code> instead of <code>AND</code>.
        <CodeBlock
            language="go"
            content={`
                // name LIKE "%test1%" OR name LIKE "%test2%"
                dbx.OrLike("name", "test1", "test2")

                // name LIKE "test1%" OR name LIKE "test2%"
                dbx.OrLike("name", "test1", "test2").Match(false, true)
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.OrNotLike(col, ...values)" tag="code" />
        <br />
        This is similar to <code>NotLike()</code> except that the column must not be one of the provided
        values, aka. multiple values are concatenated with <code>OR</code> instead of <code>AND</code>.
        <CodeBlock
            language="go"
            content={`
                // name NOT LIKE "%test1%" OR name NOT LIKE "%test2%"
                dbx.OrNotLike("name", "test1", "test2")

                // name NOT LIKE "test1%" OR name NOT LIKE "test2%"
                dbx.OrNotLike("name", "test1", "test2").Match(false, true)
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.Exists(exp)" tag="code" />
        <br />
        Prefix with <code>EXISTS</code> the specified expression (usually a subquery).
        <CodeBlock
            language="go"
            content={`
                // EXISTS (SELECT 1 FROM users WHERE status = 'active')
                dbx.Exists(dbx.NewExp("SELECT 1 FROM users WHERE status = 'active'"))
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.NotExists(exp)" tag="code" />
        <br />
        Prefix with <code>NOT EXISTS</code> the specified expression (usually a subquery).
        <CodeBlock
            language="go"
            content={`
                // NOT EXISTS (SELECT 1 FROM users WHERE status = 'active')
                dbx.NotExists(dbx.NewExp("SELECT 1 FROM users WHERE status = 'active'"))
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.Between(col, from, to)" tag="code" />
        <br />
        Generates a <code>BETWEEN</code> expression with the specified range.
        <CodeBlock
            language="go"
            content={`
                // age BETWEEN 3 and 99
                dbx.Between("age", 3, 99)
            `}
        />
    </li>
    <li>
        <HeadingLink title="dbx.NotBetween(col, from, to)" tag="code" />
        <br />
        Generates a <code>NOT BETWEEN</code> expression with the specified range.
        <CodeBlock
            language="go"
            content={`
                // age NOT BETWEEN 3 and 99
                dbx.NotBetween("age", 3, 99)
            `}
        />
    </li>
</ul>

<HeadingLink title="OrderBy(), AndOrderBy()" tag="h5" />
<p>
    The <code>OrderBy(...cols)</code> specifies the <code>ORDER BY</code> clause of the query.
    <br />
    A column name can contain <em>"ASC"</em> or <em>"DESC"</em> to indicate its ordering direction.
    <br />
    You can also use <code>AndOrderBy(...cols)</code> to append additional columns to an existing
    <code>ORDER BY</code> clause.
</p>
<CodeBlock
    language="go"
    content={`
        app.DB().
            Select("users.*").
            From("users").
            OrderBy("created ASC", "updated DESC").
            AndOrderBy("title ASC")
            ...
    `}
/>

<HeadingLink title="GroupBy(), AndGroupBy()" tag="h5" />
<p>
    The <code>GroupBy(...cols)</code> specifies the <code>GROUP BY</code> clause of the query.
    <br />
    You can also use <code>AndGroupBy(...cols)</code> to append additional columns to an existing
    <code>GROUP BY</code> clause.
</p>
<CodeBlock
    language="go"
    content={`
        app.DB().
            Select("users.*").
            From("users").
            GroupBy("department", "level")
            ...
    `}
/>

<HeadingLink title="Having(), AndHaving(), OrHaving()" tag="h5" />
<p>
    The <code>Having(exp)</code> specifies the <code>HAVING</code> clause of the query.
    <br />
    Similarly to
    <code>Where(exp)</code>, it accept a single <code>dbx.Expression</code> (see all available expressions
    listed above).
    <br />
    You can also use <code>AndHaving(exp)</code> or <code>OrHaving(exp)</code> to append additional one or
    more conditions to an existing <code>HAVING</code> clause.
</p>
<CodeBlock
    language="go"
    content={`
        app.DB().
            Select("users.*").
            From("users").
            GroupBy("department", "level").
            Having(dbx.NewExp("sum(level) > {:sum}", dbx.Params{ sum: 10 }))
            ...
    `}
/>

<HeadingLink title="Limit()" tag="h5" />
<p>
    The <code>Limit(number)</code> method specifies the <code>LIMIT</code> clause of the query.
</p>
<CodeBlock
    language="go"
    content={`
        app.DB().
            Select("users.*").
            From("users").
            Limit(30)
            ...
    `}
/>

<HeadingLink title="Offset()" tag="h5" />
<p>
    The <code>Offset(number)</code> method specifies the <code>OFFSET</code> clause of the query. Usually used
    together with <code>Limit(number)</code>.
</p>
<CodeBlock
    language="go"
    content={`
        app.DB().
            Select("users.*").
            From("users").
            Offset(5).
            Limit(30)
            ...
    `}
/>

<HeadingLink title="Transaction" />
<TransactionInfoGo />
<CodeBlock
    language="go"
    content={`
        err := app.RunInTransaction(func(txApp core.App) error {
            // update a record
            record, err := txApp.FindRecordById("articles", "RECORD_ID")
            if err != nil {
                return err
            }
            record.Set("status", "active")
            if err := txApp.Save(record); err != nil {
                return err
            }

            // run a custom raw query (doesn't fire event hooks)
            rawQuery := "DELETE FROM articles WHERE status = 'pending'"
            if _, err := txApp.NonconcurrentDB().NewQuery(rawQuery).Execute(); err != nil {
                return err
            }

            return nil
        })
    `}
/>
