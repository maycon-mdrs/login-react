import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import { Form, Input, Button, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Cadastro } from '../../components/cadastro/Cadastro';

export function CadastroPage () {

    return (
        <div className='container-fluid'>
            <div className="d-flex align-items-center justify-content-center col-lg-6" style={{ minHeight: '100vh' }}>
                <Cadastro />
            </div>
        </div>
    );
}
