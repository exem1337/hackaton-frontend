export class Validation {
   static validateFormLogIn = (form: any)=>{
      const {email, password} = form
      console.log(email)
      const formErrors: Record<string, string> = {}
      const stateErr: Record<string, boolean>  = {}
      const validateEmail = this.isValidEmail(email);
      const validatePassword = this.isValidatePassword(password)
      if(!!validateEmail) {
         stateErr["email"] = false;
         formErrors["email"] = validateEmail;
      }else {
         stateErr["email"] = true;
      }

      if(!!validatePassword) {
         stateErr["password"] = false;
         formErrors["password"] = validatePassword;
      }else {
         stateErr["password"] = true;
      }
      return {formErrors, stateErr}
   }
   private static isValidEmail(email: any) {
      if(!email || email === '') return "Пожалуйста укажите email"
      else if(email.length > 40) return "Слишком длинный email максимальная длина 40 символов"
      else if(!(/\S+@\S+\.\S+/.test(email))) return "Email введен не корректно"
      else if(email[0] === "@") return "Email не может начинаться с <@>"
   }

   private static isValidatePassword(password: any) {
      if(!password || password === '') return "Пожалуйста укажите свой пароль"
      else if(password.length > 20) return "Слишком длинный пароль максимальная длина 20 символов"
      else if(password.length < 6) return "Слишком ороткий пароль минимальная длина 6 символов"
   }
}