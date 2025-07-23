/** Fake user database */
const userDb = {
  adamhayes: {
      id: 'adamhayes',
      name: 'Adam Hayes',
      avatar: `https://randomuser.me/api/portraits/men/4.jpg`,
  },
  martincook: {
      id: 'martincook',
      name: 'Martin Cook',
      avatar: `https://randomuser.me/api/portraits/men/5.jpg`,
  },
  kalebwilson: {
      id: 'kalebwilson',
      name: 'Kaleb Wilson',
      avatar: `https://randomuser.me/api/portraits/men/6.jpg`,
  },
  sarahjones: {
      id: 'sarahjones',
      name: 'Sarah Jones',
      avatar: `https://randomuser.me/api/portraits/women/1.jpg`,
  }
};

const model = {
    "history": {
        "2": [
            {
                "id": 1,
                "uid": "sarahjones",
                "timestamp": 1752576936000,
                "feedback": "Nice improvement!"
            }
        ]
    },
    "version": 1,
    "contents": [
        {
            "type": "p",
            "children": [
                {
                    "type": "img",
                    "attrs": {
                        "style": "display: block; margin-left: auto; margin-right: auto;",
                        "title": "Tiny Logo",
                        "src": "https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png",
                        "alt": "TinyMCE Logo",
                        "width": "128",
                        "height": "128"
                    }
                }
            ]
        },
        {
            "type": "h2",
            "attrs": {
                "style": "text-align: center;"
            },
            "children": [
                {
                    "text": "Welcome to the TinyMCE Suggested Edits "
                },
                {
                    "text": "interactive ",
                    "opData": {
                        "id": 1,
                        "type": "insert",
                        "uid": "adamhayes",
                        "timestamp": 1752015064000
                    }
                },
                {
                    "text": "demo!"
                }
            ]
        },
        {
            "type": "p",
            "attrs": {
                "style": "text-align: center;"
            },
            "children": [
                {
                    "text": "Try out the Suggested Edits feature"
                },
                {
                    "text": ": type in the editor, apply formatting or delete some content. T",
                    "opData": {
                        "id": 2,
                        "type": "insert",
                        "uid": "adamhayes",
                        "timestamp": 1752415064000
                    }
                },
                {
                    "text": " by typing in the editor and t",
                    "opData": {
                        "id": 2,
                        "type": "remove",
                        "uid": "adamhayes",
                        "timestamp": 1752415064000
                    }
                },
                {
                    "text": "hen"
                },
                {
                    "text": ",",
                    "opData": {
                        "id": 3,
                        "type": "insert",
                        "uid": "adamhayes",
                        "timestamp": 1752515064000
                    }
                },
                {
                    "text": " click"
                },
                {
                    "text": "ing",
                    "opData": {
                        "id": 4,
                        "type": "remove",
                        "uid": "adamhayes",
                        "timestamp": 1752515064000
                    }
                },
                {
                    "text": " the Review Changes button in the toolbar"
                },
                {
                    "text": " to see your changes",
                    "opData": {
                        "id": 5,
                        "type": "insert",
                        "uid": "kalebwilson",
                        "timestamp": 1752615064000
                    }
                },
                {
                    "text": "."
                }
            ]
        },
        {
            "type": "p",
            "attrs": {
                "style": "text-align: center;"
            },
            "children": [
                {
                    "text": "And visit the "
                },
                {
                    "text": "pricing page",
                    "opData": {
                        "id": 6,
                        "type": "modify",
                        "uid": "kalebwilson",
                        "timestamp": 1752615064000
                    },
                    "format": [
                        {
                            "type": "a",
                            "attrs": {
                                "href": "https://www.tiny.cloud/pricing"
                            }
                        }
                    ],
                    "oldFormat": [
                        {
                            "type": "a",
                            "attrs": {
                                "href": "https://www.tiny.cloud/pricing"
                            }
                        },
                        "em"
                    ]
                },
                {
                    "text": " to learn more about our Premium plugins."
                }
            ]
        },
        {
            "type": "h2",
            "children": [
                {
                    "text": "A simple table to play with"
                }
            ]
        },
        {
            "type": "table",
            "attrs": {
                "style": "border-collapse: collapse; width: 100%;",
                "border": "1"
            },
            "children": [
                {
                    "type": "thead",
                    "children": [
                        {
                            "type": "tr",
                            "attrs": {
                                "style": "text-align: left;"
                            },
                            "children": [
                                {
                                    "type": "th",
                                    "children": [
                                        {
                                            "text": "Product"
                                        }
                                    ]
                                },
                                {
                                    "type": "th",
                                    "children": [
                                        {
                                            "text": "Cost"
                                        }
                                    ]
                                },
                                {
                                    "type": "th",
                                    "children": [
                                        {
                                            "text": "Really?"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "tbody",
                    "children": [
                        {
                            "type": "tr",
                            "children": [
                                {
                                    "type": "td",
                                    "children": [
                                        {
                                            "text": "TinyMCE Cloud"
                                        }
                                    ]
                                },
                                {
                                    "type": "td",
                                    "children": [
                                        {
                                            "text": "Get started for free"
                                        }
                                    ]
                                },
                                {
                                    "type": "td",
                                    "children": [
                                        {
                                            "text": "Yes!",
                                            "format": [
                                                "strong"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "tr",
                            "children": [
                                {
                                    "type": "td",
                                    "children": [
                                        {
                                            "text": "Plupload"
                                        }
                                    ]
                                },
                                {
                                    "type": "td",
                                    "children": [
                                        {
                                            "text": "Free"
                                        }
                                    ]
                                },
                                {
                                    "type": "td",
                                    "children": [
                                        {
                                            "text": "Yes!",
                                            "format": [
                                                "strong"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "h2",
            "opData": {
                "id": 7,
                "type": "insert",
                "uid": "martincook",
                "timestamp": 1752576331000
            },
            "children": [
                {
                    "text": "Found a bug?"
                }
            ]
        },
        {
            "type": "p",
            "children": [
                {
                    "text": " ",
                    "opData": {
                        "id": 7,
                        "type": "remove",
                        "uid": "martincook",
                        "timestamp": 1752576331000
                    }
                },
                {
                    "text": "If you believe you have found a bug please create an issue on the ",
                    "opData": {
                        "id": 7,
                        "type": "insert",
                        "uid": "martincook",
                        "timestamp": 1752576331000
                    }
                },
                {
                    "text": "GitHub repo",
                    "opData": {
                        "id": 7,
                        "type": "insert",
                        "uid": "martincook",
                        "timestamp": 1752576331000
                    },
                    "format": [
                        {
                            "type": "a",
                            "attrs": {
                                "href": "https://github.com/tinymce/tinymce/issues"
                            }
                        }
                    ]
                },
                {
                    "text": " to report it to the developers.",
                    "opData": {
                        "id": 7,
                        "type": "insert",
                        "uid": "martincook",
                        "timestamp": 1752576331000
                    }
                }
            ]
        },
        {
            "type": "h2",
            "children": [
                {
                    "text": "Finally…"
                }
            ]
        },
        {
            "type": "p",
            "children": [
                {
                    "text": "Don’t forget to check out "
                },
                {
                    "text": "Plupload",
                    "format": [
                        {
                            "type": "a",
                            "attrs": {
                                "href": "http://www.plupload.com",
                                "target": "_blank",
                                "rel": "noopener"
                            }
                        }
                    ]
                },
                {
                    "text": ", the upload solution featuring HTML5 upload support."
                }
            ]
        },
        {
            "type": "p",
            "children": [
                {
                    "text": "Thanks for supporting TinyMCE. We hope it helps you and your users create great content."
                }
            ]
        },
        {
            "type": "p",
            "children": [
                {
                    "text": "All the best from the TinyMCE team."
                }
            ]
        }
    ]
};

tinymce.init({
  selector: 'textarea#suggestededits-access-feedback',
  height: 500,
  plugins: 'suggestededits advlist anchor autolink code charmap emoticons fullscreen help image link lists media preview searchreplace table',
  toolbar: 'undo redo | suggestededits | styles fontsizeinput | bold italic | align bullist numlist | table link image | code',
  user_id: 'kalebwilson',
  fetch_users: (userIds) => Promise.all(userIds
    .map((userId) => new Promise((resolve) => 
      resolve(userDb[userId] || { id: userId }))
  )),
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
  readonly: false,
  suggestededits_access: 'feedback',
  suggestededits_content: 'html',
  suggestededits_model: model
});