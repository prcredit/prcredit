import React, { useState } from 'react';
import './FAQ.scss';
import FAQItem from "./components/FAQItem";
const FAQ = () => {
    const dataFAQ = [
        {
            ask: 'Чи можливе дострокове погашення позики?',
            answers: [
                'Так, довгострокове погашення позики можливо. У «PR CTEDIT» погашення відбувається без будь-яких штрафних санкцій.  ',
            ]
        },
        {
            ask: 'Від чого залежать умови позики (відсоткова ставка і сума видачі)?',
            answers: [
                'Сума на яку може розраховувати наш клієнт залежить від таких факторів як: вартість автомобіля, правової форми оформлення позики та кредитної історії клієнта.  \n' +
                '\n' +
                'Відсоткова ставка визначається так само індивідуально і залежить від суми, правової форми оформлення позики та терміну. Для більш детального уявлення про ці суми, радимо скористатися нашим калькулятором.  ',
            ]
        },
        {
            ask: 'На який термін видається кредит під заставу автомобіля?',
            answers: [
                'Мінімальний термін кредитування який передбачений законодавством України – 2 місяці, максимальний – 12 місяців, з можливістю продовження договору при індивідуальній бесіді.  ',
            ]
        },
        {
            ask: 'Чи можливий кредит під заставу авто, якщо в минулому були проблеми з кредитною історією?',
            answers: [
                'Можливий, все обговорюється індивідуально.',
            ]
        },

      {
        ask: 'Що буде якщо я не зможу виплатити кредит? ',
        answers: [
          'В даному випадку ми спільно з клієнтом починаємо вирішувати ситуацію шляхом продажу заставного майна. Все індивідуально, але ми завжди готові піти на зустріч своїм клієнтам. ',
        ]
      },
      {
        ask: 'Чи потрібна згода чоловіка/дружини на отримання позики? ',
        answers: [
          'Так, згода необхідна в випадку, якщо правова форма оформлення кредит. ',
        ]
      },
      {
        ask: 'Чи можна отримати кредит, якщо на авто накладений арешт? ',
        answers: [
          'Перш за все необхідно погасити всі платежі, через стягнення яких було накладено арешт і вже після цього можливо взяти кредит під заставу автомобіля. ',
        ]
      },
      {
        ask: 'Чи потрібно страхувати авто, під заставу якого береш кредит? ',
        answers: [
          'В більшості випадків ми не вимагаємо страхувати заставний автомобіль, але більш детально все обговорюється при особистій бесіді. ',
        ]
      },
      {
        ask: 'Чи можливо оформити кредит під заставу іншого транспортного засобу чи тільки під заставу легкового автомобіля?  ',
        answers: [
          'Так, наша компанія надає можливість оформити кредит від заставу іншого виду транспортного засобу.  ',
        ]
      },
    ];
    const [activeItem, setActiveItem] = useState(null);
    return (<section className="section FAQ" id="FAQ">
      <div className="container">
        <div className="FAQ__wrapper">
          <div className="FAQ__title-block">
            <h2 className="FAQ__title title title--light">
              <span>FAQ</span> <br /> Відповіді на часто поставленнi питання
            </h2>
          </div>

          <ul className="FAQ__table">
            {dataFAQ.map(item => (<FAQItem ask={item.ask} setActiveItem={setActiveItem} activeItem={activeItem === item.ask} key={item.ask}>
                  <div className="FAQ__text">
                    {item.answers.map(text => {
                return (<p key={text} dangerouslySetInnerHTML={{ __html: text }}/>);
            })}
                  </div>
                </FAQItem>))}
          </ul>
        </div>
      </div>
    </section>);
};
export default FAQ;
