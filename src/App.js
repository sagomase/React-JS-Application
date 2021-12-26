
import './App.css';
import Card from './Card';
import Data from './Data';

function App() {

  return (
    <>
      <h1 style={{backgroundColor:"rgb(240, 240, 240)",
      marginInline:"50px", textAlign:"center", fontFamily:"Garamond",fontSize:"40px"}}>
        The Best Books: Recommended Reading List</h1>

      <Card
        imgsrc={Data[0].imgsrc}
        title={Data[0].title}
        text={Data[0].text}
        item={Data[0].item}
        sample={Data[0].sample}
        list={Data[0].list}
        link={Data[0].link}
      />
      <hr style={{ marginInline:"50px"}} />
      <Card
        imgsrc={Data[1].imgsrc}
        title={Data[1].title}
        text={Data[1].text}
        item={Data[1].item}
        sample={Data[1].sample}
        list={Data[1].list}
        link={Data[1].link}
      />
      <hr style={{ marginInline:"50px"}}/>
      <Card
        imgsrc={Data[2].imgsrc}
        title={Data[2].title}
        text={Data[2].text}
        item={Data[2].item}
        sample={Data[2].sample}
        list={Data[2].list}
        link={Data[2].link}
      />
      <hr style={{ marginInline:"50px"}}/>
      <Card
        imgsrc={Data[3].imgsrc}
        title={Data[3].title}
        text={Data[3].text}
        item={Data[3].item}
        sample={Data[3].sample}
        list={Data[3].list}
        link={Data[3].link}
      />
      <hr style={{ marginInline:"50px"}}/>
      <Card
        imgsrc={Data[4].imgsrc}
        title={Data[4].title}
        text={Data[4].text}
        item={Data[4].item}
        sample={Data[4].sample}
        list={Data[4].list}
        link={Data[4].link}
      />
      <hr style={{ marginInline:"50px"}}/>
      <Card
        imgsrc={Data[5].imgsrc}
        title={Data[5].title}
        text={Data[5].text}
        item={Data[5].item}
        sample={Data[5].sample}
        list={Data[5].list}
        link={Data[5].link}
      />
      <hr style={{ marginInline:"50px"}}/>
      <Card
        imgsrc={Data[6].imgsrc}
        title={Data[6].title}
        text={Data[6].text}
        item={Data[6].item}
        sample={Data[6].sample}
        list={Data[6].list}
        link={Data[6].link}
      />
      <hr style={{ marginInline:"50px"}}/>
      <Card
        imgsrc={Data[7].imgsrc}
        title={Data[7].title}
        text={Data[7].text}
        item={Data[7].item}
        sample={Data[7].sample}
        list={Data[7].list}
        link={Data[7].link}
      />
      <hr style={{ marginInline:"50px"}}/>
      
      <Card
        imgsrc={Data[8].imgsrc}
        title={Data[8].title}
        text={Data[8].text}
        item={Data[8].item}
        sample={Data[8].sample}
        list={Data[8].list}
        link={Data[8].link}
      />
      
    </>
  );
}

export default App;
