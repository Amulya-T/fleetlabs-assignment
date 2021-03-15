import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        medical:[],
        transport:[]
    }
}
delete=(value)=>{
  const{medical}=this.state;

      let duplicateItems = [...this.state.medical]
      
      duplicateItems.splice(value,1)
      
      
      this.setState({
          medical: duplicateItems,
          }); 
  }
  deleteTransport=(value)=>{
    const{transport}=this.state;
  
        let duplicateItems = [...this.state.transport]
        
        duplicateItems.splice(value,1)
        
        
        this.setState({
            transport: duplicateItems,
            }); 
    }
componentDidMount(){
  const response1 = axios.get("http://localhost:8080/medical")
  const response2 = axios.get("http://localhost:8080/transport")

  axios.all([response1,response2])
  .then(axios.spread((response1,response2)=>{this.setState({medical:response1.data.medical,transport:response2.data.transport})}))
  
  .catch(err=>console.log(err))
}
  render (){
    const { medical }= this.state;
    const {transport} = this.state;
    
    return(

      <div >
        
        <div class="container-fluid">
  
          <div class="panel-group">
            <div class="panel panel-default">
              <div class="panel-heading rectangle-1">
                
                <div data-toggle="collapse" href="#collapse1">
                  <div>
                        <h3 class = "medical">🚑 Medical</h3>
                        <p class = "starting-blnce">Starting balance:500.00SGD</p>
                        </div>
                        <span class="icon glyphicon glyphicon-chevron-up"></span>
                        <span class= "avail-blnce" >Available balance:280.80SGD</span>
                      </div>
                    </div>
                </div>
                
                <div id="collapse1" class="panel-collapse collapse show rectangle-2">
                    <div class="panel-body">
                        <table>
                            <tr class= "title-row">
                            <th>title</th>
                            <th>Cap_per_claim</th>
                            <th>Cap per year</th>
                            <th>cap per month</th>
                            <th>available balance</th>
                            </tr>
                            {medical.map(item=>{
                          return(
                            <tr>
                              <td class = "item-title">{item.title}</td>
                              <td class = "item-data">{item.Cap_per_claim}</td>
                              <td class = "item-data">{item.Cap_per_year}</td>
                              <td class = "item-data">{item.cap_per_month}</td>
                              <td class = "item-data">{item.Available_balance}</td>
                              <td><button class="delete-btn" value={medical.indexOf(item)} onClick={()=>this.delete(medical.indexOf(item))}>Delete</button></td>
                            </tr>

                          )
                        })}
                        </table>
                    </div>   
                </div>       
              </div>            
            </div> 
            <div class="container-fluid">
  
  <div class="panel-group">
    <div class="panel panel-default">
      <div class="panel-heading rectangle-1">
        
        <div data-toggle="collapse" href="#collapse2">
               <div>
                
                <h3 class = "medical">🚗 Transport</h3>
                <p class = "starting-blnce">Starting balance:500.00SGD</p>
                </div>
                <span class="icon glyphicon glyphicon-chevron-up"></span>
                <span class= "avail-blnce" >Available balance:280.80SGD</span>
              </div>
            </div>
      </div>
        
        <div id="collapse2" class="panel-collapse collapse show rectangle-2">
            <div class="panel-body">
                <table>
                    <tr class= "title-row">
                    <th>title</th>
                    <th>Cap_per_claim</th>
                    <th>Cap per year</th>
                    <th>cap per month</th>
                    <th>available balance</th>
                    </tr>
                    {transport.map(item=>{
                  return(
                    <tr>
                      <td class="item-title">{item.title}</td>
                      <td class = "item-data">{item.Cap_per_claim}</td>
                      <td class = "item-data">{item.Cap_per_year}</td>
                      <td class = "item-data">{item.cap_per_month}</td>
                      <td class = "item-data">{item.Available_balance}</td>
                      <td><button class="delete-btn" value={transport.indexOf(item)} onClick={()=>this.deleteTransport(transport.indexOf(item))}>Delete</button></td>
                    </tr>

                  )
                })}
                </table>
            </div>   
        </div>       
    </div>            
</div>     

            
        
        
        

          </div>
               
        

          
             

         
               
             
                
             
           
            
       
            
     

    )
  }
   
}

export default App;
