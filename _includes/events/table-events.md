The following events are provided by the [Table plugin]({{ site.baseurl }}/plugins/opensource/table/).

| Name | Data | Description |
|------| ---- | ----------- |
| newrow | N/A | Fired when a row is created |
| newcell | N/A | Fired when a cell is created |
| ObjectResizeStart | N/A | Fired when a resize action is started on a table, row, column or cell using the resize bars |
| ObjectResized | N/A | Fired when a resize action is finished on a table, row, column or cell using the resize bars |
| TableModified | `{ table: HTMLTableElement }` | Fired when style or structural changes are made to a table. <br/>{{site.requires_5_6v}} |
| TableSelectionClear | N/A  | Fired when the table selection is cleared. <br/>{{ site.requires_5_1v }} |