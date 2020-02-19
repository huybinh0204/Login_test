import React, {Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    RefreshControl,
    Image,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            un: '',
            pa: '',
            kq: 'Chưa Login',
            token: '...',


        };


    }

    LOGIN() {
        fetch('http://kidsnow.edu.vn/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: this.state.un,
                password: this.state.pa,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.setState({
                    kq: responseJson["token"],
                })
                ;

            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text>From Login</Text>
                </View>
                <View style={styles.box}>
                    <TextInput
                        style={{height: 40, width: '90%', borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(un) => this.setState({un})}
                        placeholder="username"
                        value={this.state.un}
                    />
                </View>
                <View style={styles.box}>
                    <TextInput
                        style={{height: 40, width: '90%', borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(pa) => this.setState({pa})}
                        placeholder="password"
                        value={this.state.pa}

                    />

                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => {
                        this.LOGIN();
                    }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box2}>
                    <Text>{this.state.kq}</Text>

                </View>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    container:
        {
            flex: 1,
            backgroundColor: 'yellow',
            padding: 50,
        },
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box2: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
export default App;
