import { Card, CardContent, CardHeader, List, ListItem, Modal } from '@material-ui/core';
import React from 'react'

export default class ListeBureau extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            open: false
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    openModal(){
        this.setState({ open:true})
    }
    closeModal(){
        this.setState({ open:true})
    }
    render(){
       const ville = this.props.ville
        return(
            <>
            <Card onClick={this.openModal}>
                <CardHeader 
                title={ ville.nom}
                />
                <CardContent>
                    <List>
                        {
                            ville.bureau.map(v=><ListItem button key={v.id}>{v.nom + ' ' +v.quartier}</ListItem>)
                        }
                    </List>
                </CardContent>
            </Card>
            </>
        );
    }
}