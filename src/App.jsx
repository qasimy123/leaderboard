import React,{Component} from "react";
import "./index.css"

class App extends Component
{
    constructor(props){
        super(props);
        this.state={
            
            usersalltime:[],
            users:[],
            usersrecent:[]
        }
        
    }
   
    getIt(){
console.log("getting")
let BASE_URL='https://fcctop100.herokuapp.com/api/fccusers/top/recent';
  
   fetch(BASE_URL)  
  .then(response => response.json())
      .then(json => {
          
          this.setState({usersrecent:json})
          let BASE_URL='https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
  
   fetch(BASE_URL)  
  .then(response => response.json())
      .then(json => {
          
          this.setState({usersalltime:json})
          this.recent();
         
          
      })
    }
    
    )
    
    
    
    }
    
    recent(){
        this.setState({users:this.state.usersrecent});
        
    }
    
    alltime(){
         this.setState({users:this.state.usersalltime});
    }
    
    componentDidMount(){
         this.getIt()
    }
    
    render(){
      
        return(
            <div className="App">
            <div className="header">
                <div className="jumbotron">
                
                
                <div>
                <img src="https://github.com/freeCodeCamp/assets/blob/master/assets/logos/FCC-logo-white.png?raw=true" alt="logo" / >
                <div className="header-text">Leaderboard</div>
                </div>
                
                </div>
                </div>
                
                
                <ul className="list-group">
                <li className="list-group-item">
                        <div className="list-item">
                        <div>Ranking</div>
                        <div>Profile Picture</div>
                        <div className="user-name">Username</div>
                        <div className="points" >
                        <div className="link-points"><a onClick={()=>{this.recent()}}>Recent</a></div>
                        <div className="link-allpoints"><a onClick={()=>this.alltime()}>Alltime</a></div>
                        </div>
                        
                        </div>
                        
                        </li>
                {
                    this.state.users.map((user,k)=>{
                        
                        return(
                        
                        <li className="list-group-item">
                        
                        <div className="list-item">
                        <div>#{k+1}</div>
                        <img className="user-image img-rounded" alt={k} src={user.img}/>
                        <div className="user-name"><a href={"https://www.freecodecamp.org/"+user.username}>{user.username}</a></div>
                        
                        <div className="points">
                        <div className="user-points">{user.recent}</div>
                        <div className="user-allpoints">{user.alltime}</div>
                        </div>
                        
                        </div>
                        
                        </li>
                        )
                        
                    })
                    
                }
                
               </ul>
            </div>
                )
    
            }
}

export default App;