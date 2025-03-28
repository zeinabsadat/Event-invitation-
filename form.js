const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    let allErrors = [];
    const formData = new FormData(form);
    const title = formData.get("title");
    const date = formData.get("date");
    const time = formData.get("time");
    const location = formData.get("location");

    //contacts
    if (selectedContacts.length === 0) {
        isValid = false;
        allErrors.push("Please select at least one contact for the event");
    }

    //event title
    if (!title || title.trim() === "") {
        isValid = false;
        allErrors.push("Please add a title for your event.")
    }

    //event date
    if (!date || date.trim() === "") {
        allErrors.push("Please set the date");
        isValid = false;
    }

    // event time
    if (!time || time.trim() === "") {
        allErrors.push("Please set the time");
        isValid = false;
    }

    //location
    if (!location || location.trim() === "") {
        isValid = false;
        allErrors.push("Please set the location");
    }

    //after submition
    const oldMessage = form.querySelector("p");
    if (oldMessage) {
        oldMessage.remove();
    }

    let message = document.createElement("p");
    if (isValid) {
        message.textContent = "The event is successfully added.";
    } else {
        message.textContent = allErrors.join('\n');
    }
    form.appendChild(message);
});