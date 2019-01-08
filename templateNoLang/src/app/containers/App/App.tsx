import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../assets/logo.svg';
import { actions } from '../../logic/saga/app/appActions';
import { IApp } from 'src/app/logic/redux/app/appReducer';
import { IStore } from 'src/app/logic/IStore';
import { getText } from '../../logic/redux/app/appSelector';

interface IAppDispatch {
  textBasic: () => void;
  next: (payload: string) => void;
}

type IAppType = IAppDispatch & {
  app: IApp;
}

class App extends React.Component<IAppType> {
  constructor(props: IAppType) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: any) {
    const text = event.target.value;
    this.props.next(text);
  }

  public handleSubmit() {
    this.props.textBasic();
  }
  
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <br />
          Something
        </p>
        <div>
          <input type="text" value={this.props.app.textFromInputBox} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Text_to_basictext" onClick={this.handleSubmit} />
          <br />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IAppType) => {
  return {
    app: state.app,
    basic: getText(state),
    ...props
  }
};

const mapDispatchToProps = (dispatch: any): IAppDispatch => {
  return bindActionCreators({
    next: actions.textInputBox,
    textBasic: actions.textToBasictext,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);