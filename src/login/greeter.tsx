import * as React  from 'react' ;
import  {View,Text} from 'react-native'; 


class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person):string {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
let pers:Person = {firstName:"guo",lastName:"wei"};

export default class Greeting extends React.Component {
    render(){
        return(
            <View> 
              <Text> dfdfdfdfdfd</Text>
            </View>
        )
    }

}