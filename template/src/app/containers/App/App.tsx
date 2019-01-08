import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';
import { updateIntl } from 'react-intl-redux';
import { translationMessages } from '../../trans/translator';
import logo from '../../assets/logo.svg';
import { actions } from '../../logic/saga/app/appActions';
import { IApp } from 'src/app/logic/redux/app/appReducer';
import { IStore } from 'src/app/logic/IStore';
import { getLocale } from '../../logic/redux/app/appSelector';

interface IAppDispatch {
  textBasic: () => void;
  updateIntl: (payload: object) => void;
  next: (payload: string) => void;
}

type IAppType = IAppDispatch & {
  app: IApp;
  intl: ReactIntl.InjectedIntl;
}

class App extends React.Component<IAppType> {
  constructor(props: IAppType) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleLanguageChangeEn = this.handleLanguageChangeEn.bind(this);
  }

  public handleChange(event: any) {
    const text = event.target.value;
    this.props.next(text);
  }

  public handleSubmit() {
    this.props.textBasic();
  }

  public handleLanguageChange() {
    const lang: string = 'hu';
    this.props.updateIntl({
      locale: lang,
      messages: translationMessages[lang],
    });
  }

  public handleLanguageChangeEn() {
    const lang: string = 'en';
    this.props.updateIntl({
      locale: lang,
      messages: translationMessages[lang],
    });
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
          {this.props.intl.formatMessage({id: '_app.homemodalbody'})}
        </p>
        <div>
          <input type="text" value={this.props.app.textFromInputBox} onChange={this.handleChange} />
          <input type="submit" onClick={this.handleSubmit} />
          <br />
          <input type="submit" value="Magyar" onClick={this.handleLanguageChange} />
          <br />
          <input type="submit" value="Angol" onClick={this.handleLanguageChangeEn} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IAppType) => {
  return {
    app: state.app,
    locale: getLocale(state),
    ...props
  }
};

const mapDispatchToProps = (dispatch: any): IAppDispatch => {
  return bindActionCreators({
    next: actions.textInputBox,
    updateIntl,
    textBasic: actions.textToBasictext,
  }, dispatch);
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(App));