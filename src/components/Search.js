
import { Input, InputGroup, Whisper, Affix } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
const styles = {
    padding:10
};
const Search = ({name, setName}) => {

    return(
       <Affix>
           <InputGroup inside style={styles}>
               <Input value={name} onChange={setName} placeholder={'TC kimlik no giriniz'}/>
               <InputGroup.Button style={{height:'100%', width:100, backgroundColor:'grey'}}>
                   <SearchIcon /> <span style={{marginLeft:5}}> ARA</span>
               </InputGroup.Button>
           </InputGroup>
       </Affix>
    )
}
export default Search
