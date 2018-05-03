export default validations => {
    return values => {
      const errors = {};
      for (let field in validations) {
        let value = values[field];
        errors[field] = validations[field]
          .map(validateField => {
            return validateField(value, values);
          })
          .find(x => x);
      }
      return errors;
    };
  };
  