import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Input from './Components/Input';
import List from './Components/List';

export default (
    <Switch>
        <Route exact path = '/' component = {List}/>
        <Route path = '/input' component = {Input}/>
    </Switch>
)