import { Bank } from './Bank';
import { LangSwitcher } from './LangSwitcher';
import { getBalance, getLang } from './redux/selector';

export const App = () => {
  
  return (
    <div>
      <Bank />
      <LangSwitcher />
    </div>
  );
};
