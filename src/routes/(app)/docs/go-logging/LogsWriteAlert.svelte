<div class="alert alert-info m-t-10 m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="content">
        <p>
            For better performance and to minimize blocking on hot paths, logs are written with debounce and
            on batches:
        </p>
        <ul>
            <li>3 seconds after the last debounced log write</li>
            <li>when the batch threshold is reached (currently 200)</li>
            <li>right before app termination to attempt saving everything from the existing logs queue</li>
        </ul>
    </div>
</div>
