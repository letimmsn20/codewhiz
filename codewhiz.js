// Create a class named CodeWhiz
class CodeWhiz {
    constructor() {
        this.languages = [];
    }

    // Method: add a programming language to the CodeWhiz's repertoire
    addLanguage(language) {
        this.languages.push(language);
        console.log(`Added ${language} to the CodeWhiz's repertoire.`);
    }

    // Method: remove a programming language from the CodeWhiz's repertoire
    removeLanguage(language) {
        const index = this.languages.indexOf(language);
        if (index !== -1) {
            this.languages.splice(index, 1);
            console.log(`Removed ${language} from the CodeWhiz's repertoire.`);
        } else {
            console.log(`${language} is not found in the CodeWhiz's repertoire.`);
        }
    }

    // Method: list all programming languages in the CodeWhiz's repertoire
    listLanguages() {
        console.log("Programming languages in the CodeWhiz's repertoire:");
        this.languages.forEach(language => {
            console.log(language);
        });
    }
}

// Create an instance of CodeWhiz named myCodeWhiz
const myCodeWhiz = new CodeWhiz();

// Add programming languages to the CodeWhiz's repertoire
myCodeWhiz.addLanguage("JavaScript");
myCodeWhiz.addLanguage("Python");
myCodeWhiz.addLanguage("Java");

// List all programming languages in the CodeWhiz's repertoire
myCodeWhiz.listLanguages();

// Remove a programming language from the CodeWhiz's repertoire
myCodeWhiz.removeLanguage("Python");

// List all programming languages in the CodeWhiz's repertoire after removal
myCodeWhiz.listLanguages();
