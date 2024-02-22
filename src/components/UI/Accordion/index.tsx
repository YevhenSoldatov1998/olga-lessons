import React, {FC, PropsWithChildren} from "react";
import {
  AccordionContext,
  AccordionItemContext,
  useAccordionContext,
  useAccordionItemContext,
} from "./context";
import s from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(s);

//react compound pattern
interface AccordionProps {
  initialVisibleId?: string; // id of the panel to be visible
}

interface ItemProps {
  id: string;
}

interface SummeryProps {
  className?: string;
}

interface AccordionComponent extends FC<PropsWithChildren<AccordionProps>> {
  Summary: FC<PropsWithChildren<SummeryProps>>;
  Details: FC<PropsWithChildren>;
  Item: FC<PropsWithChildren<ItemProps>>;
}

const Accordion: AccordionComponent = ({children, initialVisibleId}) => {
  const [visible, setVisible] = React.useState(initialVisibleId || null);
  return (
    <div className={cx("Accordion")}>
      <AccordionContext.Provider
        value={{visibleId: visible, setVisibleId: setVisible}}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

const Item: FC<PropsWithChildren<ItemProps>> = ({children, id}) => {
  const value = useAccordionContext();
  return (
    <AccordionItemContext.Provider value={id}>
      <div className={cx("Item")} onClick={() => value?.setVisibleId(id)}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};
const Summary: FC<PropsWithChildren<SummeryProps>> = ({children, className}) => {
  const value = useAccordionContext();
  const id = useAccordionItemContext();
  return (
    <div className={cx("Summary", className || '')} onClick={() => value?.setVisibleId(id)}>
      {children}
    </div>
  );
};
const Details: FC<PropsWithChildren> = ({children}) => {
  const itemId = useAccordionItemContext();
  const value = useAccordionContext();
  if (itemId !== value?.visibleId) return null;

  return <div className={cx("Details")}>{children}</div>;
};

Accordion.Item = Item;
Accordion.Summary = Summary;
Accordion.Details = Details;
export default Accordion;
