import { useEffect, useState } from 'react';

function Form() {
   const [data, setData] = useState(null);
   const [toggle, setToggle] = useState(false);
   const [value, setValue] = useState('');

   const onClick = () => setToggle(prev => !prev);

   useEffect(() => {
      setTimeout(() => {
         setData({});
      }, 900);
   }, []);

   return (
      <div data-testid="form-page">
         <h1>Hello!</h1>
         {!value && (
            <button data-testid="toggle-btn" onClick={onClick}>
               click me
            </button>
         )}

         <input data-testid="input-elem" value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="input value..." />
         {data && <div>data</div>}
         <div data-testid="value-elem">{value}</div>
         {toggle && <div data-testid="toggle-elem">toggle</div>}
      </div>
   );
}

export default Form;
