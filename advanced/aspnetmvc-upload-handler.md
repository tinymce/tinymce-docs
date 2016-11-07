---
layout: default
title: ASP.NET MVC Upload Handler
title_nav: ASP.NET MVC Upload Handler
description_short: A server-side upload handler ASP.NET MVC script.
description: A server-side upload hander ASP.NET MVC script suitable for TinyMCE.
keywords: asp_net_mvc_upload_handler async image upload
---

The following script creates a server-side upload handler in ASP.NET MVC suitable for use with TinyMCE.

```cs
        [HttpPost]
        public ActionResult TinyMceUpload(HttpPostedFileBase file)
        {
            Response.AppendHeader("Access-Control-Allow-Origin", "*");

            var location = Upload(Server.MapPath("~"), file);

            return Json(new { location }, JsonRequestBehavior.AllowGet);
        }
        
        /// <summary>
        /// Saves the contents of an uploaded file.
        /// </summary>
        /// <param name="targetFolder">Location where to save the file.</param>
        /// <param name="file">The uploaded file.</param>
        /// <exception cref="InvalidOperationException">File size limit exceeded.</exception>
        /// <exception cref="InvalidOperationException">Invalid file extension.</exception>
        /// <returns>The relative path where the file is stored.</returns>
        private static string Upload(string targetFolder, HttpPostedFileBase file)
        {
            const int megabyte = 1024 * 1024;

            if (file.ContentLength > (8 * megabyte))
            {
                throw new InvalidOperationException("File size limit exceeded.");
            }

            var extension = Path.GetExtension(file.FileName.ToLowerInvariant());
            var extensions = new List<string> { ".gif", ".jpg", ".png", ".svg", ".webp" };
            if (!extensions.Contains(extension))
            {
                throw new InvalidOperationException("Invalid file extension.");
            }

            var fileName = Guid.NewGuid() + extension;
            var path = Path.Combine(targetFolder, "p", fileName);
            file.SaveAs(path);

            return Path.Combine("/uploads", "p", fileName).Replace('\\', '/');
        }
```
