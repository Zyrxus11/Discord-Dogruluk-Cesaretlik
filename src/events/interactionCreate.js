module.exports = (client,interaction) => {
    if(!interaction.isChatInputCommand()) return
    const command = client.commands.get(interaction.commandName)
    if(!command) return interaction.reply(`${command} komutu bulunamad─▒.`)

    command.run(client,interaction)
}