<p>
    The syntax basically follows the format
    <code>
        <span class="txt-success">OPERAND</span>
        <span class="txt-danger">OPERATOR</span>
        <span class="txt-success">OPERAND</span></code
    >, where:
</p>
<ul>
    <li>
        <code class="txt-success">OPERAND</code> - could be any field literal, string (single or double quoted),
        number, null, true, false
    </li>
    <li>
        <code class="txt-danger">OPERATOR</code> - is one of:
        <br />
        <ul>
            <li>
                <code class="filter-op">{"="}</code>
                <span class="txt">Equal</span>
            </li>
            <li>
                <code class="filter-op">{"!="}</code>
                <span class="txt">NOT equal</span>
            </li>
            <li>
                <code class="filter-op">{">"}</code>
                <span class="txt">Greater than</span>
            </li>
            <li>
                <code class="filter-op">{">="}</code>
                <span class="txt">Greater than or equal</span>
            </li>
            <li>
                <code class="filter-op">{"<"}</code>
                <span class="txt">Less than</span>
            </li>
            <li>
                <code class="filter-op">{"<="}</code>
                <span class="txt">Less than or equal</span>
            </li>
            <li>
                <code class="filter-op">{"~"}</code>
                <span class="txt">
                    Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for wildcard
                    match)
                </span>
            </li>
            <li>
                <code class="filter-op">{"!~"}</code>
                <span class="txt">
                    NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                    wildcard match)
                </span>
            </li>

            <li>
                <code class="filter-op">{"?="}</code>
                <em class="txt-hint">Any/At least one of</em>
                <span class="txt">Equal</span>
            </li>
            <li>
                <code class="filter-op">{"?!="}</code>
                <em class="txt-hint">Any/At least one of</em>
                <span class="txt">NOT equal</span>
            </li>
            <li>
                <code class="filter-op">{"?>"}</code>
                <em class="txt-hint">Any/At least one of</em>
                <span class="txt">Greater than</span>
            </li>
            <li>
                <code class="filter-op">{"?>="}</code>
                <em class="txt-hint">Any/At least one of</em>
                <span class="txt">Greater than or equal</span>
            </li>
            <li>
                <code class="filter-op">{"?<"}</code>
                <em class="txt-hint">Any/At least one of</em>
                <span class="txt">Less than</span>
            </li>
            <li>
                <code class="filter-op">{"?<="}</code>
                <em class="txt-hint">Any/At least one of</em>
                <span class="txt">Less than or equal</span>
            </li>
            <li>
                <code class="filter-op">{"?~"}</code>
                <em class="txt-hint">Any/At least one of</em>
                <span class="txt">
                    Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for wildcard
                    match)
                </span>
            </li>
            <li>
                <code class="filter-op">{"?!~"}</code>
                <em class="txt-hint">Any/At least one of</em>
                <span class="txt">
                    NOT Like/Contains (if not specified auto wraps the right string OPERAND in a "%" for
                    wildcard match)
                </span>
            </li>
        </ul>
    </li>
</ul>

<p class="txt-bold">
    To group and combine several expressions you can use parenthesis
    <code>(...)</code>, <code>&&</code> (AND) and <code>||</code> (OR) tokens.
</p>

<p>Single line comments are also supported: <code>// Example comment</code>.</p>

<style>
    .filter-op {
        display: inline-block;
        vertical-align: top;
        margin-right: 5px;
        width: 30px;
        text-align: center;
        padding-left: 0;
        padding-right: 0;
    }
</style>
