import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockData } from './mocks';
import { Button, Space, Typography } from 'antd';

const { Text } = Typography;

const TableRecord: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const record = mockData.find(record => record.id === Number(id));
    return (
        <Space direction="vertical">
            <Text>Заявка № {record?.id ?? ''}</Text>
            <Button
                type="primary"
                onClick={() => {
                    navigate('/');
                }}
            >
                Вернуться назад
            </Button>
        </Space>
    );
};

export default TableRecord;
