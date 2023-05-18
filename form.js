class Validation
{
    fields;

    constructor(fields)
    {
        this.fields = fields
    }

    is_valid()
    {
        this.fields.forEach(element => {
            element.rules.forEach(rule => {
                switch (rule) {
                    case "required":
                        if (Boolean(document.getElementById(element.id).value) == false )
                        {
                            const error_message = "Заполните поле!"
                            document.getElementById(element.error_id).innerText = error_message
                        } else {
                            const error_message = ""
                            document.getElementById(element.error_id).innerText = error_message
                        }
                        break;
                    
                    case Boolean(rule.split(':')[0] == "min"):
                        alert(123)
                    default:
                        break;
                }
            })
        });
    }
}