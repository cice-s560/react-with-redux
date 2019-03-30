import React from "react";
import { connect } from "react-redux";
import styles from "./style.module.scss";
import { fetchUsers } from "../../redux-state/cice-actions";

class AjaxComponent extends React.Component {
  componentDidMount() {
    // this.fetchUsers();
  }

  async fetchUsers() {
    const req = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await req.json();

    this.props.fetchUsers(data);
  }

  render() {
    return (
      <div className={styles.marius}>
        <p className={styles.grande}>
          <span className={styles.grande}>Lista de usuarios:</span>{" "}
          <button onClick={() => this.fetchUsers()}>Pedir usuarios</button>
        </p>
        <ul>
          {this.props.users &&
            this.props.users.map((user, index) => (
              <li key={`user_${index}`}>Usuario: {user.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  users: store.cice.users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(fetchUsers(users))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AjaxComponent);
