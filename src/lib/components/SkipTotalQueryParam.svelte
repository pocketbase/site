<tr>
    <td id="query-page">skipTotal</td>
    <td>
        <span class="label">Boolean</span>
    </td>
    <td>
        If it is set the total counts query will be skipped and the response fields
        <code>totalItems</code> and <code>totalPages</code> will have <code>-1</code> value.
        <br />
        This could drastically speed up the search queries when the total counters are not needed or cursor based
        pagination is used.
        <br />
        For optimization purposes, it is set by default for the
        <code>getFirstListItem()</code>
        and
        <code>getFullList()</code> SDKs methods.
    </td>
</tr>
