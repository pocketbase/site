<script>
    import CodeBlock from "@/components/CodeBlock.svelte";
</script>

<tr>
    <td>expand</td>
    <td>
        <span class="label">String</span>
    </td>
    <td>
        Auto expand record relations. Ex.:
        <CodeBlock content={`?expand=relField1,relField2.subRelField`} />
        Supports up to 6-levels depth nested relations expansion. <br />
        The expanded relations will be appended to the record under the
        <code>expand</code> property (eg. <code>{`"expand": {"relField1": {...}, ...}`}</code>).
        <br />
        Only the relations to which the request user has permissions to <strong>view</strong> will
        be expanded.
    </td>
</tr>
