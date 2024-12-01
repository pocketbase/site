<p>
    To execute multiple queries in a transaction you can use
    <a
        href="{import.meta.env.PB_GODOC_URL}/core#BaseApp.RunInTransaction"
        target="_blank"
        rel="noopener noreferrer"
    >
        <code>app.RunInTransaction(fn)</code>
    </a>
    .
</p>
<p>
    The DB operations are persisted only if the transaction returns <code>nil</code>.
</p>
<p>
    It is safe to nest <code>RunInTransaction</code> calls as long as you use the callback's
    <code>txApp</code> argument.
</p>
<div class="alert alert-info m-b-xs">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            Inside the transaction function always use its <code>txApp</code> argument and not the original
            <code>app</code> instance because we allow only a single writer/transaction at a time and it could
            result in a deadlock.
        </p>
        <p>
            To avoid performance issues, try to minimize slow/long running tasks such as sending emails,
            connecting to external services, etc. as part of the transaction.
        </p>
    </div>
</div>
