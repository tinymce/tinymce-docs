**Ticket:** DOC-<num>

**Site:** [Staging branch](http://docs-<hotfix|feature|release>-<ver>-doc-<num>.staging.tiny.cloud/docs/tinymce/latest/)

**Changes:**
* <placeholder-text>

---

### **Pre-checks:**

- [ ] Branch is correctly prefixed:
- **Feature:** `feature/<version>/DOC-XXXX` (e.g., `feature/8.0.0/DOC-1234`)
- **Hotfix:** `hotfix/<version>/DOC-XXXX` (e.g., `hotfix/8.0.0/DOC-1234`)
- **EPIC:** `release/<ver>` (e.g., `release/8.0.0` for major releases)

- [ ] `modules/ROOT/nav.adoc` has been updated (if applicable).
- [ ] Files have been included where required (if applicable).
- [ ] Files removed have been deleted, not just excluded from the build (if applicable).
- [ ] Files added for **New product features** include a `release note` entry.
- [ ] Major or minor version changes have updated the `supported-versions.adoc` table.
- [ ] Build passes without console errors, warnings, or issues.

---

### **Review:**

- [ ] Documentation Team Lead has reviewed.
