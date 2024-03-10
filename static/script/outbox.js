const makeOutboxA1 = (base) => {
    base.setAttribute("width", "570");
    base.setAttribute("height", "555");

    const patern = makePaternA();
    patern.appendChild(makeInbox());

    base.appendChild(patern);

    return base;
};

export { makeOutboxA1 };
