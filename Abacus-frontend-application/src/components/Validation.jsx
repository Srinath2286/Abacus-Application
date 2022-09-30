
const validation=(values) => {
    let errors={};
    if(!values.fullname){
        errors.fullname="Name is required.";
    }
    if(!values.email){
        errors.email="Email is required.";
    }else if(!/\s+@\s+\.\s+/.test(values.email)){
        errors.email="Email is invalid.";
    }
    if(!values.password){
        errors.password="Password is required.";
    }else if(values.password.length < 5){
        errors.password="password must be more than five characters.";
    }
    return errors
};
export default validation;