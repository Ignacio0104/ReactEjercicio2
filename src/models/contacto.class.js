export class Contact {
    name="";
    lastName = "";
    email = "";
    phone = 0;
    connected = false;

    constructor(name,lastName,email,phone,connected)
    {
        this.name=name;
        this.lastName=lastName;
        this.email=email;
        this.phone=phone;
        this.connected = connected;
    }
}