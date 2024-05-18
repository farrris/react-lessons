import Accordion from "../components/Accordion";


function AccordionPage() {
    const items =[
        {
            id: 'f3fe3r32',
            label: 'Can I see JS?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
        {
            id: 'f33few2332',
            label: 'Can I see React?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
        {
            id: 'sdvxzsdv3',
            label: 'Can I see Vue?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
    ];

    return (
        <Accordion items={items}/>
    );
}

export default AccordionPage;
