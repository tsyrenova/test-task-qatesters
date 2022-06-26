import React from 'react';
import styles from './badge.module.scss';

enum Status {
    NEW = 'Новое',
    ASSIGNED_TO = 'Назначено',
    COMPLETED = 'Завершено',
    STARTED = 'Выполняется',
    DECLINED = 'Отменено',
    UNKNOWN = 'Неизвестно'
}

const getStatus = (status: string) => {
    switch (status) {
        case 'new':
            return (
                <p className={`${styles.badge} ${styles.new}`}>{Status.NEW}</p>
            );
        case 'assigned_to':
            return (
                <p className={`${styles.badge} ${styles.assigned}`}>
                    {Status.ASSIGNED_TO}
                </p>
            );
        case 'completed':
            return (
                <p className={`${styles.badge} ${styles.completed}`}>
                    {Status.COMPLETED}
                </p>
            );
        case 'started':
            return (
                <p className={`${styles.badge} ${styles.started}`}>
                    {Status.STARTED}
                </p>
            );
        case 'declined':
            return (
                <p className={`${styles.badge} ${styles.declined}`}>
                    {Status.DECLINED}
                </p>
            );
        default:
            return (
                <p className={`${styles.badge} ${styles.unknown}`}>
                    {Status.UNKNOWN}
                </p>
            );
    }
};

interface Props {
    status: string;
}

const Badge: React.FC<Props> = ({ status }) => {
    return getStatus(status);
};

export default Badge;
