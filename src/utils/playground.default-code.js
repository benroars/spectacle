export const defaultCode = `
/**
 * Sample client side code
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { compose } from 'redux';
 import { push } from 'react-router-redux';

 import { Table, TableBody, TableHeader, TableRow, TableHeaderColumn, TableRowColumn, RaisedButton } from 'material-ui';

 import { graphql } from 'react-apollo';

 import gql from 'graphql-tag';

 //Client side defined query
 const get_users = gql\`
   {
       get_users {
         id,
         email,
         firstName,
         lastName,
         phone
       }
   }\`;

//Client side defined mutation
const delete_user = gql\`
  mutation delete_user($id: String) {
    delete_user(id: $id) {
      id
    }
  }
\`;

 class Dashboard extends Component {

   constructor(props) {
     super(props);

     this.state = {
       errors: ''
     }
   }

   routeToEditUser(row, col, e) {
     const { id, email, firstName, lastName, phone } = this.props.data.get_users[row]

     if(col === 4) {

       this.props.delete_user({
        variables: { id },

        update: (store, { data: { delete_user: { id } } }) => {
           const cached_users = store.readQuery({
             query: get_users,
             variables: {
               id
             }
           })
           cached_users.get_users = cached_users.get_users.filter(user => user.id !== id)
           store.writeQuery({ query: get_users, data: cached_users });
         },

         optimisticResponse: {
           delete_user: {
             id,
             __typename: 'UserType',
           },
         }

        //Can also refetch the entire query
        //refetchQueries: [{ query: get_users }]

       }).then(({ data: { delete_user: { id } } }) => {
         console.log('Succesfully deleted user: ', id);

       }).catch((e) => {
 				this.setState({
 					errors: e.graphQLErrors.map(error => error.message)
 				});
 			});

     } else {

       this.props.dispatch(push({
         pathname: '/form',
         state: {
           id,
           email,
           firstName,
           lastName,
           phone
         }
       }));
     }
   }

   render() {
     const { routeToParam, data } = this.props;
     const { loading, get_users } = data;

     if (loading) {
       //return a spinner
       return null;
     }

     if (this.state.errors) {
       //show error somewhere in UI / redirect
       return null;
     }

     return (
       <div className="dashboard">
         <div className="dashboard-title-container">
           <h1 className="dashboard-title">User Dashboard</h1>
           <RaisedButton
             className="dashboard-login"
             label="Login"
             labelStyle={{ color: 'white' }}
             primary={true}
             onClick={ () => { routeToParam('/login') } }
           />
         </div>
         <Table className="dashboard-table" onCellClick={(row, col, e) => this.routeToEditUser(row, col, e)}>
           <TableHeader className="dashboard-table-headers">
             <TableRow>
               <TableHeaderColumn>First Name</TableHeaderColumn>
               <TableHeaderColumn>Last Name</TableHeaderColumn>
               <TableHeaderColumn>Email</TableHeaderColumn>
               <TableHeaderColumn>Phone</TableHeaderColumn>
               <TableHeaderColumn>Delete</TableHeaderColumn>
             </TableRow>
           </TableHeader>
           <TableBody className="dashboard-table-rows" showRowHover={true}>
           {get_users ? get_users.map(user =>
             <TableRow key={user.id}>
               <TableRowColumn>{user.firstName}</TableRowColumn>
               <TableRowColumn>{user.lastName}</TableRowColumn>
               <TableRowColumn>{user.email}</TableRowColumn>
               <TableRowColumn>{user.phone}</TableRowColumn>
               <TableRowColumn>{'X'}</TableRowColumn>
             </TableRow>
           ) : null}
           </TableBody>
         </Table>
         <RaisedButton
           className="dashboard-create-user"
           label="Create User"
           labelStyle={{ color: 'white' }}
           primary={true}
           onClick={ () => { routeToParam('/form') } }
         />
       </div>
     );
   }
 }

 const enhancedDashboard = compose(
 	graphql(get_users, {
 		name: 'data'
 }),
 	graphql(delete_user, {
 		name: 'delete_user'
 	})
 )(Dashboard);

 function mapStateToProps(state) {
   return {};
 }

 function mapDispatchToProps(dispatch) {
   return {
     dispatch,
     routeToParam: (location) => dispatch(push(location)),
   };
 }

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(enhancedDashboard);
`;
