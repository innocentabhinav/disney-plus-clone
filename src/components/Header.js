import React ,{useState ,useEffect} from 'react'
import styled from 'styled-components'
import { useLocation , useNavigate} from 'react-router-dom';
import { auth, provider } from '../firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'


function Header() {
     const location =useLocation();
     const path= location.pathname;

     let flag =(path=="/")? true : false;

     const [userDetail, setUserDetail] = useState({});

     const navigate= useNavigate();

     //when user refreshes the page then it should not be log out and redirected to the default page
     useEffect(() =>{
         onAuthStateChanged(auth ,(user)=> {
            if(user){
                setUserDetail(user);
            }
         })
     },[])

     const signIn = ()=> {
        signInWithPopup(auth,provider)
        .then((result) =>{
            // alert('Logged-In Successfully!')
            setUserDetail(result.user)
            navigate('/home')
        })
        .catch((err)=>{
            console.log(err);
        })
     }

     const sign_Out =()=> {
        signOut(auth)
        .then( ()=>{
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
        alert('Logged-Out!')
     }

     const email=userDetail.email;
     const name=userDetail.displayName;
     const profileImageURL=userDetail.photoURL;


    const [isActive, setIsActive] = useState(false);
    const onFocusHandle = ()=> setIsActive(true)
    const onBlurHandle = ()=>  setIsActive(false)


    return (
        <Nav>
            <Logo src="/images/logo.svg" />
           
           {flag==false &&
           <>
           
          
            <NavMenu>
                <a >
                    <img src="/images/home-icon.svg" />
                    <span onClick={()=>navigate('/home')}>HOME</span>
                </a>

                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>

                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <SearchBar>
            <input type="text" placeholder="Search" onFocus={onFocusHandle} onBlur={onBlurHandle}
              style={{
                width: isActive ? '300px' : '190px',
                borderBottom: isActive ? '1px solid rgb(43, 118, 207)' : '1px solid rgb(255, 255, 255, 0.5)'
              }} />
          </SearchBar>
         
         
          <Profile>
            <div className="name-div">
              <p>Hi, {name}</p>
            </div>
            <div className="img-div">
              <img onClick={sign_Out} src={profileImageURL} />
            </div>
          </Profile>
          

          {/* <UserImg src="/images/IMG_20190905_082724_476 (1).ico" /> */}
        
 
          </>
           }
           
           {flag ==true &&
           <LoginButton>
           <button onClick={signIn}>LOGIN</button>
         </LoginButton>
           }    
      
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding: 0 30px;
overflow-x: hidden;

`
const Logo = styled.img`
 width:80px;


`
const NavMenu = styled.div`
display:flex;
flex:1 ;
margin-left:25px;
align-items:center;

a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
        height:20px;
    }
 span{
    font-size:13px;
    letter-spacing:1.42px;
     position:relative;

&:after {
    content:"";
    height:2px;
    background:white;
    position:absolute;
    left:0;
    right:0;
    bottom:-6px;
    opacity:0;
    transform-origin: left center;
    transition:all 250ms cubic-bezier(0.25 , 0.46, 0.45, 0.94) 0s;
    transform:scaleX(0);
}
}

&:hover{
    span:after {
        transform:scaleX(1);
        opacity:1;
    }
}
 
}
 
`

const UserImg = styled.img`
width:48px;
height:48px;
border-radius:50%;

`
const LoginButton=styled.div`
  flex: 1;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: end;
  button {
    height: 38px;
    width: 98px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    font-family: Inter;
    letter-spacing: 0.4px;
    font-size: 15px;
    border: 1px solid white;
    border-radius: 4px;
    margin-right: 35px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
      color: black;
      background-color: rgba(255, 255, 255, 0.94);
    }
  }
`

const SearchBar=styled.div`
  flex:1;
  margin-left: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  input {
    width: 207px;
    height: 28px;
    background-color: rgb(9,11,19);
    border: none;
    font-family: Inter;
    font-size: 16px;
    outline: none;
    color: rgba(255, 255, 255, 0.5);
    background: url('/images/search-grey.svg') no-repeat right;
    background-size: 17.5px;
    transition: all 0.25s;
  }
`


const Profile=styled.div`
  flex:1.2;
  height: 70px;
  background-color: rgb(9,11,19);
  display: flex;
  align-items: center;
  .name-div {
    flex:1;
    display:flex;
    justify-content: end;
    p {
      opacity: 0.9;
      margin-right: 8px;
      color: white;
      font-family: Inter;
      font-size:16px;
      font-weight: 500;
      cursor: pointer;
    }
  }
  .img-div {
    margin-right: 18px;
    width:70px;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: rgb(9,11,19);
    position: relative;
    img {
      width: 42px;
      height: 42px;
      border-radius: 21px;
      cursor: pointer;
    }
  }
`
