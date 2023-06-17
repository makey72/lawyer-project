import {validateForms} from "../functions/validate-forms";

const setting = [
  {
    ruleSelector: '#inp-name', rules: [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 3,
      },
    ]
  },
  {
    ruleSelector: '#inp-number',
    tel: true,
    telError: 'err phone',
    rules: [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 10,
      },
    ],
  }
]

const send = () => {
  console.log(1)
}
validateForms('.form', setting, send())
