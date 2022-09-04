tinymce.init({
    selector: "textarea",
    plugins: "powerpaste a11ychecker linkchecker wordcount table advtable editimage autosave advlist anchor advcode image link lists media mediaembed searchreplace visualblocks template mergetags",
    toolbar: "mergetags | styles | bold italic underline | link | align bullist numlist",
	
	mergetags_list: [
    
	{
      title: 'Proposal',
      menu: [
        {
          value: 'Client.LastCallDate',
          title: 'Call date'
        },
        {
          value: 'Client.Name',
          title: 'Client name'
        },
        {
          value: 'Consultant',
          title: 'Consultant'
        },
        {
          value: 'Proposal.SubmissionDate',
          title: 'Submission date'
        },
        {
          value: 'Salutation',
          title: 'Salutation'
        }
      ]
    }]
});
