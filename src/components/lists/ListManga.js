import React from 'react';
import { List, Spin } from 'antd';

import DetailManga from '../modals/DetailManga';

const ListManga = (props) => {

    return (
        props.loading ? (
            <Spin tip = { props.message } className = 'loadingSpin'/>
        ) : (
            <>
                <div 
                    style = {{ fontFamily: 'Roboto,sans-serif', WebkitFontSmoothing: 'antialiased', 
                    margin: 0, padding: 0, boxSizing: 'border-box' }}
                >
                    <div style = {{ display: 'flex', alignItems: 'center' }}>
                        <h2 style = {{ color: '#1890ff', textTransform: 'uppercase', fontSize: '18px', fontWeight: 700, letterSpacing: '1.2px', marginLeft: '40px' }}> 
                            { props.messageType }  
                        </h2>
                        <div style = {{ flex: 1, borderBottom: '1px solid #9e9e9e', marginLeft: '12px', borderRadius: '8px', marginRight: '35px' }}></div>
                    </div>
                </div>
                <List
                    itemLayout = 'vertical' size = 'small'
                    pagination = {{ 
                        position: 'both', showSizeChanger: false, pageSize: 4 }
                    } 
                    grid = {{ 
                        gutter: 20, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4
                    }}
                    dataSource = { props.mangaList } 
                    style = {{ 
                        margin: 'auto', width: '100%', paddingLeft: '30px', 
                        paddingRight: '35px', height: '100%' 
                    }}
                    renderItem = { manga => (
                        <List.Item 
                            key = { manga.mal_id }
                            actions = {[ <DetailManga manga_id = { manga.mal_id }/> ]}
                        >    
                        </List.Item>
                    )}
                />
            </>
        )
    )
};

export default ListManga;