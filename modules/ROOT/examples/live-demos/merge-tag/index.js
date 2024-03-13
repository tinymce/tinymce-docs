tinymce.init({
  selector: "textarea#mergetags",
  plugins: "powerpaste a11ychecker linkchecker wordcount table advtable editimage autosave advlist anchor advcode image link lists media mediaembed searchreplace visualblocks mergetags",
  toolbar: "mergetags | undo redo | styles | bold italic underline | link | align bullist numlist",
  mergetags_prefix: '{*',
  mergetags_suffix: '*}',
  mergetags_list: [
    {
      title: 'Client',
      menu: [
        {
          value: 'Client.LastCallDate',
          title: 'Call date'
        },
        {
          value: 'Client.Name',
          title: 'Client name'
        }
      ]
    },
    {
      title: 'Proposal',
      menu: [
        {
          value: 'Proposal.SubmissionDate',
          title: 'Submission date'
        }
      ]
    },
    {
      value: 'Consultant',
      title: 'Consultant'
    },
    {
      value: 'Salutation',
      title: 'Salutation'
    }
  ]
});
