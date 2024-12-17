// Not finished
export class Content {
    static names = {
        "first": "Jane",
        "last": "Doe",
    }

    static initials = `${this.names.first.charAt(0)}${this.names.last.charAt(0)}`

    static images = {
        "portrait": {
            "dir": "/images/portrait/",
            "files": ["1.jpg", "2.jpg"]
        },
        "landscape": {
            "dir": "/images/landscape/",
            "files": ["1.jpg", "2.jpg", "3.jpg"],
        }
    };
}
