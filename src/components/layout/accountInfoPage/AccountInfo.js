import React from "react";
import { Card} from 'react-bootstrap';
import AccountOperationsList from "./AccountOperationsList";
import MainAccountInfo from "./MainAccountInfo";
import OperationsPagination from "./OperationsPagination";

function AccountInfo(props) {
    return (
        <>
            <Card>
                <Card.Body>
                    <MainAccountInfo account={props.accountInfo.account} />
                    <AccountOperationsList operations={props.accountInfo.operations} />
                    <OperationsPagination pageInfo={props.accountInfo.pageInfo}
                        userId={props.accountInfo.userId}
                        accountNumber={props.accountInfo.account.accountNumber}
                        onPageChanged={props.onPageChanged} />
                </Card.Body>
            </Card>
        </>
    )
}

export default AccountInfo;