export default async function handler(req, res) {
    // const command = new ListTablesCommand({});
    try {
        res.status(200).json({"Result": "Ok"})
    } catch (err) {
        console.error(err);
        res.status(200).json(err);
    }
    // const ddb = new DynamoDBClient();
    //     const params = {
    //         TableName: 'crane',
    //         Item: {
    //             "userid": "bl00dshooter"
    //         }
    //     }
    //     const response = await ddb.ExecuteStatement(`INSERT INTO "crane" value ${params}`);
    //     res.status(200).json(response);
}