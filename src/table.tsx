import { Table as AntdTable, Typography, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DataType } from './const';
import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import Badge from './badge';
import { mockData } from './mocks';
import { useNavigate } from 'react-router-dom';
import styles from './table.module.scss';

const { Text } = Typography;

const columns: ColumnsType<DataType> = [
    {
        title: 'Номер / Дата',
        dataIndex: 'name',
        key: 'name',
        className: styles.firstColumn,
        render: (value, { id, created_date }, index) => (
            <>
                <Space direction="vertical">
                    <Text>№{id}</Text>
                    <Text type="secondary">
                        {dayjs(created_date, ['DDMM-YYYY HH:mm'], true).format(
                            'DD.MM.YYYY HH:mm'
                        )}
                    </Text>
                </Space>
            </>
        )
    },
    {
        title: 'Тип задания / Автор',
        dataIndex: 'type',
        key: 'type',
        className: styles.secondColumn,
        render: (value, { order_type, created_user }, index) => {
            const { name } = order_type;
            const { surname, name: firstName, patronymic } = created_user;

            return (
                <Space direction="vertical">
                    <Text>{name}</Text>
                    <Text type="secondary">
                        {surname} {firstName[0]}.{patronymic[0]}.
                    </Text>
                </Space>
            );
        }
    },
    {
        title: 'Аккаунт / Терминал',
        dataIndex: 'account',
        key: 'account',
        ellipsis: true,
        className: styles.thirdColumn,
        render: (value, { account, terminal }, index) => {
            const { name } = account;
            const { name: terminalName } = terminal;

            return (
                <>
                    <Text>{name}</Text>
                    <p style={{ fontSize: '8px' }}></p>
                    <Text type="secondary">{terminalName}</Text>
                </>
            );
        }
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        className: styles.fourthColumn,
        render: (value, { status }, index) => (
            <Text>
                <Badge status={status} />
            </Text>
        ),
        align: 'center'
    }
];

const Table: React.FC = () => {
    const navigate = useNavigate();


    return (
        <AntdTable<DataType>
            rowKey={({ id }) => id}
            columns={columns}
            dataSource={mockData}
            pagination={{ position: ['bottomCenter'] }}
            onRow={(record, rowIndex) => {
                return {
                    onClick: event => {
                        navigate(`/table/${record.id}`);
                    }
                };
            }}
        />
    );
};

export default Table;
