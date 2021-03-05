import React from 'react'
import Button from '../../buttons/general/button'
import Icon from '../../icon/icon'
import './style.scss'

class Heading extends React.Component { 
  render(){
  	const H = `h${this.props.hTag}`;

    return(

      <div 
        className={`heading heading__${this.props.size}`}
        style={{ marginBottom: this.props.spacingBottom }}
      >

      	{this.props.hTag 
          ? <H>
              {this.props.subtitle 
                ? <div className={`${this.props.color ? 'text__' + this.props.color: ''}`}>
                    { this.props.bolded == false
                      ? <div>{this.props.title}</div>
                      : <div><strong>{this.props.title}</strong></div>
                    }
                    
                    <div className={`${this.props.subTitleColor ? 'text__' + this.props.subTitleColor:''}`}>
                      {this.props.subTitle}
                    </div>
                  </div>

                : <div>
                    { this.props.bolded == false
                      ? <div>{this.props.title}</div>
                      : <div><strong>{this.props.title}</strong></div>
                    }
                  </div>
              }
  	      	</H> 

          : <div className={`${this.props.color ? 'text__' + this.props.color: ''}`}>
              {this.props.subTitle 
                ? <div>
                    { this.props.bolded == false
                      ? <div>{this.props.title}</div>
                      : <div><strong>{ this.props.title || this.props.children }</strong></div>
                    }

                    <div className={`heading__sub--title ${this.props.subTitleColor ? 'text__' + this.props.subTitleColor:''}`}>
                      {this.props.subTitle}
                    </div>
                  </div>

                : <div className="heading__text">
                    { this.props.bolded == false
                      ? <div>{ this.props.title || this.props.children }</div>
                      : <div>
                          { this.props.icon
                            ? <Icon size={ this.props.iconSize } icon={ this.props.icon } />
                            : null
                          }
                          
                          <strong>{ this.props.title || this.props.children }</strong>
                        </div>
                    }
                  </div>
              }
	      	  </div>
	      }

        {this.props.btnTitle
          ? <Button color={this.props.btnColor} title={this.props.btnTitle} />
          : null
        }

      </div>

    )
  }
}

export default Heading
