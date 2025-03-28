class onlineContacts {
    constructor(name, src, alt, email) {
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.email = email;
    }
}

const contacts = [];
let selectedContacts = [];

const contact1 = new onlineContacts("Tine", "images/g01.jpg", "a girl", "tina@mn.com");
const contact2 = new onlineContacts("Mona", "images/g02.jpg", "a girl", "mona@mn.com");
const contact3 = new onlineContacts("Sana", "images/g03.jpg", "a girl", "sana@mn.com");
const contact4 = new onlineContacts("Alex", "images/b01.jpg", "a boy", "alex@mn.com");
const contact5 = new onlineContacts("Joey", "images/b02.jpg", "a boy", "joey@mn.com");

contacts.push(contact1, contact2, contact3, contact4, contact5);

const onlineUser = document.querySelector(".online-users");
onlineUser.style.cssText = `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
`;

contacts.forEach((item) => {
    const contactCard = document.createElement("div");
    contactCard.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 8px;
        cursor: pointer;
        border-radius: 8px;
        transition: background-color 0.3s;
    `;
    const proImg = document.createElement("img");
    proImg.style.cssText = `
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    `;
    proImg.alt = item.alt;
    proImg.src = item.src;

    const proName = document.createElement("p");
    proName.style.cssText = `
    font-size: 12px;
    font-weight: 400;
    `;

    proName.textContent = item.name;
    contactCard.appendChild(proImg);
    contactCard.appendChild(proName);
    onlineUser.appendChild(contactCard);

    contactCard.addEventListener("click", ()=>{
        if(selectedContacts.includes(item)){
            selectedContacts = selectedContacts.filter(contact => contact !== item);
            contactCard.style.backgroundColor= ""
        } else{
            selectedContacts.push(item);
            contactCard.style.backgroundColor = "#e5e5e535";
        }
    })
});