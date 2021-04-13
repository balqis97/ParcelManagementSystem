import React, { Component } from 'react'
import { StyleSheet,Text,TextInput,SafeAreaView,View,Button,table} from 'react-native';
import Moment from 'moment';

class Inputs extends Component {
constructor(){
   super(); 
   this.state = {
      //first element is house no second element is date
    MainStorage:[
      [['24','09-08-18'],['25','09-09-18'],['26','09-08-18'],['27','09-10-18'],['28','09-08-18']
      ],
      [  ['29','09-08-18'],['30','09-08-18'],['40','12-08-18'],['50','10-08-18'],['60','09-08-18']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
      [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
      ],
   [  ['0','0'],['0','0'],['0','0'],['0','0'],['0','0']
     ],
   ],
      date:Moment().format('YYYY-MM-DD'),
      houseNo:'',
      message:'',
      UncollectedParcelArray:[],
   } 
   }
   analyze(date,houseno) {
     var flag='false';
      var data='false';

      //check if the data exist
     for (let i = 0; i < this.state.MainStorage.length; i++){

      for (let j = 0; j < this.state.MainStorage[i].length; j++)
      {
         for (let z = 0; z <this.state.MainStorage[i][j].length; z++){
            if(this.state.MainStorage[i][j][0]==houseno && this.state.MainStorage[i][j][1]==date)
            {
               var data='true';
            }
         }
      }
     }
      //store data in the array
     for (let i = 0; i < this.state.MainStorage.length; i++) {
      for (let j = 0; j < this.state.MainStorage[i].length; j++)
      {
         for (let z = 0; z <this.state.MainStorage[i][j].length; z++) {
   
            if(flag=='false' && data=='false')
            {
               if(this.state.MainStorage[i][j][0]=='0' && this.state.MainStorage[i][j][1]=='0')
                  {
                     this.state.MainStorage[i][j][0]=houseno;
                     this.state.MainStorage[i][j][1]=date;
                     flag='true'
                     data='true';
                  }
                  else{
                     this.state.message="error loading data";
                  }
            }
            else{
               this.state.message="Record exist";
            }
         }
      }
      }      
      this.setState({ houseno: '' })
      };

      Analyze2(){
         var b = 0;
         var current = Moment().startOf('day');
         var duration=Moment.duration(current.diff(b)).asDays();
         
         
         for (let i = 0; i < this.state.MainStorage.length; i++){
            for (let j = 0; j < this.state.MainStorage[i].length; j++)
            {
               for (let z = 0; z <this.state.MainStorage[i][j].length; z++){
                  b = this.state.MainStorage[i][j][1];
                  duration=Moment.duration(current.diff(b)).asDays();
      
                  if(duration>2)
                  {
                    this.state.UncollectedParcelArray.push(this.state.MainStorage[i][j][0]);
                    this.state.MainStorage[i][j][0]='0';
                    this.state.MainStorage[i][j][1]='0';
                  

                    //any uncollected parcel more than 2 days will be returned to sender
                    this.state.status = "Return the parcel to sender"; 
                  }
                  else{
                     this.state.status = "Keep the parcel in storage";
                  }
               }
      
            }
         }   
       }
      render() {
         return (
         <View style={styles.container}>
            <h1> PARCEL MANAGEMENT SYSTEM</h1>
   
         <table>
          <tr>
            <td>House No :</td> 
            <td><TextInput style={styles.TextInput} onChangeText={(houseNo) => this.setState({houseNo})} placeholder='Enter House No'/></td>
          </tr>
      
          <tr> 
            <td><View style={styles.button}>
                  <Button color="#1d2424" title="Submit" onPress={() => this.analyze(this.state.date,this.state.houseNo) }/>
                  </View></td> </tr>
         <br></br>
         <tr>
            <h3> YOUR PARCEL DETAILS: </h3>
         </tr>
         <tr>
            <td>Date: </td>
            <td> :{this.state.date} </td>
         </tr>
         <tr>
            <td>House Number: </td>
            <td> :{this.state.houseNo}  </td>
         </tr>
         <tr>
            <td>Status: </td>
            <td> :{this.state.message}</td>
         </tr>
         <div>
            <br></br>
            <table>
            <thead> <tr>
            <th> Storage </th>
            <th> House No. & Date  </th>
            <th> House No. & Date  </th>
            <th> House No. & Date  </th>
            <th> House No. & Date  </th>
            <th> House No. & Date  </th>
                </tr>
                </thead>
                <tbody>
                   {this.state.MainStorage.slice(0,this.state.MainStorage.length).map((item,index) => {
                      return (
                        <tr>
                            <td> 1 </td>
                            <td>{item[0][0]} {item[0][1]} </td>
                            <td>{item[1][0]} {item[1][1]} </td>
                            <td>{item[2][0]} {item[2][1]}</td>
                            <td>{item[3][0]} {item[3][1]}</td>
                            <td>{item[4][0]} {item[4][1]}</td> 
                         </tr>
                      );
                   })}    
                </tbody>
            </table>
         </div>
         <br></br>
         <table>
            <thead>
            <tr>
               <th> Uncollected Parcel(House No) </th>
               <th>  Parcel status:</th>
          </tr>
            </thead>
            <tbody>
            <tr>
               <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[0]} </td>
               <td>  {this.Analyze2()} {this.state.status} </td>
          </tr>
          <tr>
               <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[2]} </td>
               <td>  {this.Analyze2()} {this.state.status} </td>
          </tr>
          <tr>
               <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[4]} </td>
               <td>  {this.Analyze2()} {this.state.status} </td>
          </tr>
          <tr>
               <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[6]} </td>
               <td>  {this.Analyze2()} {this.state.status} </td>
          </tr>
          <tr>
               <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[8]} </td>
               <td>  {this.Analyze2()} {this.state.status} </td>
          </tr>
          <tr>
               <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[10]} </td>
               <td>  {this.Analyze2()} {this.state.status} </td>
          </tr>
          <tr>
               <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[12]} </td>
               <td>  {this.Analyze2()} {this.state.status} </td>
          </tr>
          <tr>
               <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[14]} </td>
               <td>  {this.Analyze2()} {this.state.status} </td>
          </tr>
          <tr>
               <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[16]} </td>
               <td>  {this.Analyze2()} {this.state.status} </td>
          </tr>
          <tr>
               <td>  {this.Analyze2()} {this.state.UncollectedParcelArray[18]} </td>
               <td>  {this.Analyze2()} {this.state.status} </td>
          </tr>
            </tbody>
      
          </table>

         </table>
         
          
         </View>
         ); 
         }
   }
  
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      alignItems: 'center'
   },
   Headers:{
      alignItems: 'center'
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      alignItems:'center',
      backgroundColor: '#a17af7',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
   table:{
      width: 10,
      border:1
   },
   td :{
  border: 1,
  margin: 1,
  padding:5
}
})