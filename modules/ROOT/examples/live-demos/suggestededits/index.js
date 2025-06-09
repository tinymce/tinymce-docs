/** Fake user database */
const userDb = {
  adamhenderson: {
      id: 'adamhenderson',
      name: 'Adam Henderson',
      avatar: `https://randomuser.me/api/portraits/men/1.jpg`,
  },
  michaelcook: {
      id: 'michaelcook',
      name: 'Michael Cook',
      avatar: `https://randomuser.me/api/portraits/men/2.jpg`,
  },
  kalebwilson: {
      id: 'kalebwilson',
      name: 'Kaleb Wilson',
      avatar: `https://randomuser.me/api/portraits/men/3.jpg`,
  },
  kyleeinstein: {
      id: 'kyleeinstein',
      name: 'Kyle Einstein',
      avatar: `https://randomuser.me/api/portraits/men/4.jpg`,
  },
};

const model = {
    "version": 1,
    "maxId": 7,
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
                    "_opData": {
                        "id": 1,
                        "type": "insert",
                        "uid": "adamhenderson",
                        "timestamp": 1749214950000
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
                    "text": ": type in the editor, apply formatting or delete some content.",
                    "_opData": {
                        "id": 3,
                        "type": "insert",
                        "uid": "adamhenderson",
                        "timestamp": 1749215051000
                    }
                },
                {
                    "text": " by typing in the editor and",
                    "_opData": {
                        "id": 2,
                        "type": "remove",
                        "uid": "adamhenderson",
                        "timestamp": 1749215053000
                    }
                },
                {
                    "text": " "
                },
                {
                    "text": "t",
                    "_opData": {
                        "id": 4,
                        "type": "remove",
                        "uid": "adamhenderson",
                        "timestamp": 1749215055000
                    }
                },
                {
                    "text": "T",
                    "_opData": {
                        "id": 4,
                        "type": "insert",
                        "uid": "adamhenderson",
                        "timestamp": 1749215055000
                    }
                },
                {
                    "text": "hen"
                },
                {
                    "text": ",",
                    "_opData": {
                        "id": 5,
                        "type": "insert",
                        "uid": "adamhenderson",
                        "timestamp": 1749215056000
                    }
                },
                {
                    "text": " click"
                },
                {
                    "text": "ing",
                    "_opData": {
                        "id": 6,
                        "type": "remove",
                        "uid": "adamhenderson",
                        "timestamp": 1749215060000
                    }
                },
                {
                    "text": " the Review Changes button in the toolbar"
                },
                {
                    "text": " to see your changes",
                    "_opData": {
                        "id": 7,
                        "type": "insert",
                        "uid": "adamhenderson",
                        "timestamp": 1749215064000
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
                    "format": [
                        {
                            "type": "a",
                            "attrs": {
                                "href": "https://www.tiny.cloud/pricing"
                            }
                        }
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
                    "text": "If you believe you have found a bug please create an issue on the "
                },
                {
                    "text": "GitHub repo",
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
                    "text": " to report it to the developers."
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
    ],
    "history": {}
}

const fetch_users = (ids) => {
  return new Promise((resolve, reject) => {
    const users = ids.map(id => userDb[id]);
    if (users.length > 0) {
      resolve(users);
    } else {
      reject(new Error('No users found'));
    }
  });
}

tinymce.init({
  selector: 'textarea#suggested-edits',
  height: 500,
  plugins: 'suggestededits',
  toolbar: 'suggestededits',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }', 
  suggestededits_content: 'model',
  suggestededits_model: model,
  user_id: 'michaelcook',
  fetch_users, 
});

