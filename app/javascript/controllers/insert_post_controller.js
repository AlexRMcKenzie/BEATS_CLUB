import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-post"
export default class extends Controller {
  static targets = ["items", "form"]

  connect() {
    this.csrfToken = document.querySelector('meta[name= "csrf-token"]').getAttribute('content')
  }

  send(event) {
    event.preventDefault()
    fetch(this.formTarget.action, {
      method: "POST",
      headers: {"Accept": "application/json", "X-CSRF-Token": this.csrfToken},
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        if (data.inserted_item) {
          this.itemsTarget.insertAdjacentHTML("afterbegin", data.inserted_item)
        }
        this.formTarget.outerHTML = data.form
      })
  }
}
